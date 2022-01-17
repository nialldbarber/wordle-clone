import { useEffect, useRef, useState } from "react"

import { GuessRow } from "src/components/GuessRow"
import { GUESSED_WORDS, WORD_OF_THE_DAY } from "src/constants/words"
import { getWordFromListViaEpoch } from "src/utils/getWordFromList"
import { addItemToLocalStorage } from "src/utils/saveToLocalStorage"
import { checkGuessMatchesWord } from "src/utils/checkGuessMatchesWord"
import { isGuessCorrect, isGuessLengthEnough } from "src/utils/isGuessCorrect"
import { words } from "src/data/words"
import { isWordInList } from "src/utils/isWordInList"
import { SUCCESS } from "src/constants/messages"
import { Grid } from "./styles/Grid"

const App = () => {
  // alerts the user if they won or input an invalid word
  const [toastMessage, setToastMessage] = useState('')
  // currently a place to store all guesses for local storage retrieval
  const [guesses, setGuesses] = useState<string[]>([])

  // ugly list of each guess and their respective refs
  const [guessOne, setGuessOne] = useState("")
  const oneRef = useRef()
  const [guessTwo, setGuessTwo] = useState("")
  const twoRef = useRef()
  const [guessThree, setGuessThree] = useState("")
  const threeRef = useRef()
  const [guessFour, setGuessFour] = useState("")
  const fourRef = useRef()
  const [guessFive, setGuessFive] = useState("")
  const fiveRef = useRef()
  const [guessSix, setGuessSix] = useState("")
  const sixRef = useRef()
  // the last ref means the user can't edit anymore
  const lastRef = useRef()

  // actual word state variable to check against the guess
  const [actualWord, setActualWord] = useState("")

  // a generic handle change function to facilitate change
  // detection for guesses
  // @ts-ignore
  function handleChange(e, guessFn) {
    let guess = e.target.value
    guessFn(guess)
  }

  // check the guess against the word of the day
  // user the isGuessCorrect func to assess if it's
  // a) correct b) partial or c) incorrect
  const handleGuess = (
    guess: string,
    guessFn: any,
    currentRef: any,
    nextRef: any
  ) => {
    // ❌
    // if guess is not valid, clear input and re-focus on current ref
    let isWordValid = isWordInList(guess, words)
    if (!isWordValid) {
      setToastMessage('Invalid word!')
      guessFn('')
      currentRef.current.focus()
      return
    }
    // ✅
    // add word to word list in local storage
    // not sure why, but i think i'll use this
    // later to make sure it's not a new puzzle
    // every time a user refreshes

    // retrieve items from local storage
    localStorage.setItem(GUESSED_WORDS, JSON.stringify(guesses))

    // check guess against actual word and produce a lookup table
    let wordCheck = checkGuessMatchesWord(guess, actualWord)
    // check if guess.length > 5
    let guessLengthEnough = isGuessLengthEnough(guess)
    // get the verdict of the guess
    let guessOutcome = isGuessCorrect(wordCheck)
    // check verdict & length
    if (guessOutcome !== 'correct' && guessLengthEnough) {
      nextRef.current.focus()
    } else {
      setToastMessage(SUCCESS)
      // @ts-ignore
      lastRef?.current.focus()
    }
    setGuesses([...guesses, guess])
  }

  /**
   * EFFECTS
   */
  // set word of the day into local storage
  useEffect(() => {
    let { word } = getWordFromListViaEpoch()
    addItemToLocalStorage(WORD_OF_THE_DAY, word)
  }, [])

  // get said word from local storage (in case of refresh)
  useEffect(() => {
    let getWord = localStorage.getItem(WORD_OF_THE_DAY)
    setActualWord(getWord ?? "")
  }, [])

  // on first load, make sure user is taken to first input
  useEffect(() => {
    if (toastMessage !== SUCCESS) {
      // @ts-ignore
      oneRef?.current.focus()
    }
  }, [])

  return (
    <div>
      <h1>The word is {actualWord}</h1>
      <h1>{toastMessage}</h1>
      <Grid>
        <div>
          <GuessRow
            ref={oneRef}
            value={guessOne}
            onChange={(e: any) => handleChange(e, setGuessOne)}
            onClick={() => handleGuess(guessOne, setGuessOne, oneRef, twoRef)}
          />
          <GuessRow
            ref={twoRef}
            value={guessTwo}
            onChange={(e: any) => handleChange(e, setGuessTwo)}
            onClick={() => handleGuess(guessTwo, setGuessTwo, twoRef, threeRef)}
          />
          <GuessRow
            ref={threeRef}
            value={guessThree}
            onChange={(e: any) => handleChange(e, setGuessThree)}
            onClick={() => handleGuess(guessThree, setGuessThree, threeRef, fourRef)}
          />
          <GuessRow
            ref={fourRef}
            value={guessFour}
            onChange={(e: any) => handleChange(e, setGuessFour)}
            onClick={() => handleGuess(guessFour, setGuessFour, fourRef, fiveRef)}
          />
          <GuessRow
            ref={fiveRef}
            value={guessFive}
            onChange={(e: any) => handleChange(e, setGuessFive)}
            onClick={() => handleGuess(guessFive, setGuessFive, fiveRef, sixRef)}
          />
          <GuessRow
            ref={sixRef}
            value={guessSix}
            onChange={(e: any) => handleChange(e, setGuessSix)}
            onClick={() => handleGuess(guessSix, setGuessSix, sixRef, lastRef)}
          />
          <input style={{ display: "none" }} ref={lastRef} />
        </div>
      </Grid>
    </div>
  )
}

export default App
