# Plan

- you need to guess a five letter word

- you get 6 attempts to get it right
- if you take
  -> more than 6 attempts, you loose
  -> less than 6 attempts, you win

- if you get a letter right
  -> in the correct position the square will be green
  -> in an incorrect position, the square will be yellow
- if you get it wrong
  -> the letter will be grey

---

# Tech

- React
- TypeScript
- Styled Components

---

# Files system:

### constants

- list of words to guess from

### pages

- home page

### components

- word grid
- - grid is 5 x 6 (30 squares)
- keyboard

---

# Logic

### utils

- get word of the day from list of words in constants
- it should have some sort of algorithm where a new word is chosen every day

- keyboard logic, i.e. getting the correct key codes (wes bos?)

### state

- fetch word of the day
- turn it into array to compare guess against
- keep track of guessed words
- maybe create an object of correct letter + index
- - if this is correct, green
- - if word is correct, yellow
- - if word is not in word array, grey

- think about it a row at a time, how to capture user input without an input 

- capture input via state? 
- when the page loads, use a ref to take the user to *invisisble* input. 
- when the user clicks the row, ⬆️

### Ideas for capturing keys

-
