import { EPOCHMS, MSINDAY } from "src/constants/time"
import { words } from "src/data/words"

// found & modified from: https://github.com/hannahcode/wordle/blob/main/src/lib/words.ts
export function getWordFromListViaEpoch() {
  let now = Date.now()
  let index = Math.floor((now - EPOCHMS) / MSINDAY)
  return {
    word: words[index],
    index,
  }
}
