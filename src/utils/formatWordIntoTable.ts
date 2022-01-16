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

export interface FormattedWord {
  guess: string
  index?: number
}

export const formatWordIntoTable = (word: string): FormattedWord[] =>
  //@ts-ignore
  word.split("").reduce((total, guess, index) => {
    return [...total, { guess, index }]
  }, [])
