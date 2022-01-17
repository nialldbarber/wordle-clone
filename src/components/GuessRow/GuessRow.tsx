import { forwardRef, useEffect, useState } from "react"

import { WORD_OF_THE_DAY } from "src/constants/words"
import { Form, Letter, LetterContainer } from "src/styles/Letter.style"
import { checkGuessMatchesWord } from "src/utils/checkGuessMatchesWord"

type GuessRowProps = {
  value?: any
  onChange?: any
  onClick?: any
  disabled?: boolean
}

const GuessRow = forwardRef(
  ({ value, onChange, onClick, disabled }: GuessRowProps, ref) => {
    const [commitToGuess, setCommitToGuess] = useState(false)
    const [output, setOutput] = useState([])
    const disableTab = (e: any) => {
      if (e.key === "Tab") {
        e.preventDefault()
      }
    }

    const getLetterBackground = (letter: number) => {
      let className
      if (letter === 2) {
        className = 'correct'
      } else if (letter === 1) {
        className = 'partial'
      } else {
        className = 'incorrect'
      }
      return className
    }

    useEffect(() => {
      let wordOfTheDay = localStorage.getItem(WORD_OF_THE_DAY)
      // @ts-ignore
      let guess = checkGuessMatchesWord(value, wordOfTheDay)
      if (value.length === 5) {
        setOutput(guess)
      }
    }, [value])

    return (
      <div style={{height: 65}}>
        <Form
          onSubmit={(e) => {
            e.preventDefault()
            onClick()
            setCommitToGuess(true)
          }}
        >
          <input
            ref={ref}
            type="text"
            tabIndex={-1}
            onKeyDown={disableTab}
            maxLength={5}
            value={value}
            onChange={(e: any) => onChange(e)}
          />
          <button disabled={value?.length < 5 ?? true}> +</button>
        </Form>
        <LetterContainer $base>
          <Letter />
          <Letter />
          <Letter />
          <Letter />
          <Letter />
        </LetterContainer>
        {commitToGuess ? (
          <LetterContainer>
            {output.map(({guess, output}, i) => (
              <Letter
                key={guess + i}
                className={getLetterBackground(output)}
              >
                {guess}
              </Letter>
            ))}
          </LetterContainer>
        ) : (
        <LetterContainer>
          {value.split('').map((letter: string, i: number) => (
            <Letter key={letter + i}>{letter}</Letter>
          ))}
        </LetterContainer>
        )}
      </div>
    )
  }
)

export default GuessRow
