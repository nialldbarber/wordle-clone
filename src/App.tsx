import { GuessRow } from "src/components/GuessRow"

const App = () => {
  // save word of the day to localStorage
  return (
    <div className="App">
      <GuessRow />
      <GuessRow />
      <GuessRow />
      <GuessRow />
      <GuessRow />
      <GuessRow />
    </div>
  )
}

export default App
