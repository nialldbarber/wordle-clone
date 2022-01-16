import { useRef, useState } from "react"

const GuessRow = () => {
  const [guess, setGuess] = useState("")
  const ref = useRef(null)

  // click row, navigates to input
  const handleChange = (e: any) => {
    setGuess(e.target.value)
    console.log(e.target.value)
  }

  // limit by 5 characters

  // enter, sends it off to guess function

  return (
    <div>
      <p>guess row</p>
      <input
        type="text"
        maxLength={5}
        value={guess}
        onChange={handleChange}
      />
    </div>
  )
}

export default GuessRow
