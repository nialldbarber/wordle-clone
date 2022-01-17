import { words } from "src/data/words"
import { isWordInList } from "src/utils/isWordInList"

describe("utils -> isWordInList()", () => {
  test("it should return true if a valid word is inputted", () => {
    expect(isWordInList("teary", words)).toBeTruthy()
  })

  test("it should return false if a invalid word is inputted", () => {
    expect(isWordInList("xpowr", words)).toBeFalsy()
  })
})
