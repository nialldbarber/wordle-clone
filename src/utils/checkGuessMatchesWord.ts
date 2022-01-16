import { formatWordIntoTable } from "src/utils/formatWordIntoTable"
import type { FormattedWord } from "src/utils/formatWordIntoTable"

interface CheckMatches extends FormattedWord {
  output: number
}

export function checkGuessMatchesWord(
  guess: string,
  word: string
): CheckMatches[] {
  let finalGuess = []
  let guessedWord = formatWordIntoTable(guess)
  let actualWord = formatWordIntoTable(word)

  // loop through guess
  for (let guessedLetter in guessedWord) {
    let { guess, index } = guessedWord[guessedLetter]
    // does the letter exist in the actual word?
    let isLetterFound = actualWord.find((l) => l.guess === guess)
    if (isLetterFound !== undefined) {
      // letter is a match & in correct postion
      if (index === isLetterFound.index) {
        finalGuess.push({ guess, output: 2 })
        // letter is a match, but in wrong postion
      } else {
        finalGuess.push({ guess, output: 1 })
      }
      // letter is not a match
    } else {
      finalGuess.push({ guess, output: 0 })
    }
  }
  return finalGuess
}
