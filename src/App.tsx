import { useEffect, useState } from "react"

import { GuessRow } from "src/components/GuessRow"
import { WORD_OF_THE_DAY } from "src/constants/words"
import { getWordFromListViaEpoch } from "src/utils/getWordFromList"
import {
  addItemToLocalStorage,
  getItemFromLocalStorage,
} from "src/utils/saveToLocalStorage"

const App = () => {
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

  return (
    <div className="App">
      <h1>The word is {actualWord}</h1>
      <GuessRow />
      <GuessRow />
      <GuessRow />
      <GuessRow />
      <GuessRow />
      <GuessRow />
    </div>
  )
}

export default App
