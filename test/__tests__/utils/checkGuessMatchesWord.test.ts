import { checkGuessMatchesWord } from "src/utils/checkGuessMatchesWord"

describe("utils -> checkGuessMatchesWord()", () => {
  test("it should return a lookup table with wrong guesses", () => {
    let guess = "zzzzz"
    let word = "hello"

    let output = [
      { guess: "z", output: 0 },
      { guess: "z", output: 0 },
      { guess: "z", output: 0 },
      { guess: "z", output: 0 },
      { guess: "z", output: 0 },
    ]

    expect(checkGuessMatchesWord(guess, word)).toStrictEqual(output)
  })

  test("it should return a lookup table with some correct guesses", () => {
    let guess = "tears"
    let word = "panic"

    let output = [
      { guess: "t", output: 0 },
      { guess: "e", output: 0 },
      { guess: "a", output: 1 },
      { guess: "r", output: 0 },
      { guess: "s", output: 0 },
    ]

    expect(checkGuessMatchesWord(guess, word)).toStrictEqual(output)
  })

  test("it should return a lookup table with all correct guesses", () => {
    let guess = "panic"
    let word = "panic"

    let output = [
      { guess: "p", output: 2 },
      { guess: "a", output: 2 },
      { guess: "n", output: 2 },
      { guess: "i", output: 2 },
      { guess: "c", output: 2 },
    ]

    expect(checkGuessMatchesWord(guess, word)).toStrictEqual(output)
  })
})
