import { useEffect, useRef, useState } from "react"

import { GuessRow } from "src/components/GuessRow"
import { WORD_OF_THE_DAY } from "src/constants/words"
import { getWordFromListViaEpoch } from "src/utils/getWordFromList"
import {
  addItemToLocalStorage,
  getItemFromLocalStorage,
} from "src/utils/saveToLocalStorage"

import { checkGuessMatchesWord } from "./utils/checkGuessMatchesWord"
import { isGuessCorrect } from "./utils/isGuessCorrect"

const App = () => {
  const [guesses, setGuesses] = useState([])

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

  const lastRef = useRef()

  const [actualWord, setActualWord] = useState("")

  // set word
  useEffect(() => {
    let { word } = getWordFromListViaEpoch()
    addItemToLocalStorage(WORD_OF_THE_DAY, word)
  }, [])

  // get word
  useEffect(() => {
    let getWord = localStorage.getItem(WORD_OF_THE_DAY)
    setActualWord(getWord ?? "")
  }, [])

  useEffect(() => {
    // @ts-ignore
    oneRef?.current.focus()
  }, [])

  /**

    attempt 1: 
      send guess to guess checker
        is is correct?
          done, no more
        no?
          go to next

          nextRef.current.focus()
    attempt 2: 

   */

  // @ts-ignore
  function handleChange(e, guessFn) {
    let guess = e.target.value
    guessFn(guess)
    console.log(guess)
  }

  // @ts-ignore
  function handleGuess(guess, nextRef) {
    let wordCheck = checkGuessMatchesWord(guess, actualWord)
    let correct = isGuessCorrect(wordCheck)
    if (!correct && guess.length === 5) {
      // @ts-ignore
      nextRef.current.focus()
    }
    // @ts-ignore
    setGuesses([...guesses, guess])
    // let
  }

  // const handleGuessOne = (e: any) => {
  //   let guess = e.target.value
  //   setGuessOne(guess)
  //   let wordCheck = checkGuessMatchesWord(guess, actualWord)
  //   let correct = isGuessCorrect(wordCheck)
  //   if (!correct && guess.length === 5) {
  //     // @ts-ignore
  //     twoRef.current.focus()
  //   }
  // }

  return (
    <div className="App">
      <h1>The word is {actualWord}</h1>
      <GuessRow
        ref={oneRef}
        value={guessOne}
        onChange={(e: any) => handleChange(e, setGuessOne)}
        onClick={() => handleGuess(guessOne, twoRef)}
      />
      <GuessRow
        ref={twoRef}
        value={guessTwo}
        onChange={(e: any) => handleChange(e, setGuessTwo)}
        onClick={() => handleGuess(guessTwo, threeRef)}
      />
      <GuessRow
        ref={threeRef}
        value={guessThree}
        onChange={(e: any) => handleChange(e, setGuessThree)}
        onClick={() => handleGuess(guessThree, fourRef)}
      />
      <GuessRow
        ref={fourRef}
        value={guessFour}
        onChange={(e: any) => handleChange(e, setGuessFour)}
        onClick={() => handleGuess(guessFour, fiveRef)}
      />
      <GuessRow
        ref={fiveRef}
        value={guessFive}
        onChange={(e: any) => handleChange(e, setGuessFive)}
        onClick={() => handleGuess(guessFive, sixRef)}
      />
      <GuessRow
        ref={sixRef}
        value={guessSix}
        onChange={(e: any) => handleChange(e, setGuessSix)}
        onClick={() => handleGuess(guessSix, lastRef)}
      />
      <input style={{ display: "none" }} ref={lastRef} />
    </div>
  )
}

export default App
