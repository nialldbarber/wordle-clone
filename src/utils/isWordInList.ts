/**
  checks if provided word is in
  word list, returns a bool
 */
export const isWordInList = (word: string, list: string[]): boolean =>
  list.includes(word)
