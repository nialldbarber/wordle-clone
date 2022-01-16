type FormattedWord = {
  guess: string
  index: number
}

/**
  formatWordIntoTable()

  Format word into a lookup table
  It shows the letter and the index
  To be used in checkGuessMatchesWord()

  "hello" 👉
  [
    { guess: 'h', index: 0 },
    { guess: 'e', index: 1 },
    { guess: 'l', index: 2 },
    { guess: 'l', index: 3 },
    { guess: 'o', index: 4 }
  ]
 */
export const formatWordIntoTable = (word: string): FormattedWord[] =>
  //@ts-ignore
  word.split("").reduce((total, guess, index) => {
    return [...total, { guess, index }]
  }, [])

export function checkGuessMatchesWord(guess: string, word: string) {
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
