import { formatWordIntoTable } from "src/utils/formatWordIntoTable"

describe("utils -> formatWordIntoTable()", () => {
  test("it should turn 5 letter word into a lookup table", () => {
    let input = "hello"
    let output = [
      { guess: "h", index: 0 },
      { guess: "e", index: 1 },
      { guess: "l", index: 2 },
      { guess: "l", index: 3 },
      { guess: "o", index: 4 },
    ]
    expect(formatWordIntoTable(input)).toStrictEqual(output)
  })
})
