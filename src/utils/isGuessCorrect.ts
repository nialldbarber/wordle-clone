export const isGuessLengthEnough = (guess: string) =>
  guess.length === 5

/**
  this takes the array from checkGuessMatchesWord()
  and returns a string stating it's result:
  - correct
  - partial
  - incorrect
 */
export const isGuessCorrect = (guess: any) => {
  let total = guess.reduce(
    // @ts-ignore
    (total, curr) => total + curr.output,
    0
  )

  if (total === 10) return 'correct'
  else if (total > 0 && total < 10) return 'partial'
  else return 'incorrect'
}
