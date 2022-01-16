export const isGuessCorrect = (guess: any) => {
  let total = guess.reduce(
    // @ts-ignore
    (total, curr) => total + curr.output,
    0
  )
  return total === 10
}
