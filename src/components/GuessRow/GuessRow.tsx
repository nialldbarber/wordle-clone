import { forwardRef, useEffect, useState } from "react"

import { WORD_OF_THE_DAY } from "src/constants/words"
import { words } from "src/data/words"
import {
  Form,
  Letter,
  LetterContainer,
} from "src/styles/Letter.style"
import { checkGuessMatchesWord } from "src/utils/checkGuessMatchesWord"
import { getLetterBackground } from "src/utils/getLetterBackground"
import { isWordInList } from "src/utils/isWordInList"

type GuessRowProps = {
  value?: any
  onChange?: any
  onClick?: any
  disabled?: boolean
}

const GuessRow = forwardRef<HTMLInputElement, GuessRowProps>(
  ({ value, onChange, onClick }, ref) => {
    const [commitToGuess, setCommitToGuess] = useState(false)
    const [output, setOutput] = useState([])
    const disableTab = (e: any) => {
      if (e.key === "Tab") {
        e.preventDefault()
      }
    }

    useEffect(() => {
      let wordOfTheDay = localStorage.getItem(WORD_OF_THE_DAY)
      // @ts-ignore
      let guess = checkGuessMatchesWord(value, wordOfTheDay)
      if (value.length === 5) {
        // @ts-ignore
        setOutput(guess)
      }
    }, [value])

    useEffect(() => {
      if (commitToGuess) {
        let isWordValid = isWordInList(value, words)
        if (!isWordValid) {
          setCommitToGuess(false)
        }
      }
    }, [commitToGuess])

    return (
      <div style={{ height: 70 }}>
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
            {output.map(({ guess, output }, i) => (
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
            {value.split("").map((letter: string, i: number) => (
              <Letter key={letter + i}>{letter}</Letter>
            ))}
          </LetterContainer>
        )}
      </div>
    )
  }
)

export default GuessRow
