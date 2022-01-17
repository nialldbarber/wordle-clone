export function getLetterBackground(letter: number): string {
  let className
  if (letter === 2) {
    className = "correct"
  } else if (letter === 1) {
    className = "partial"
  } else {
    className = "incorrect"
  }
  return className
}
