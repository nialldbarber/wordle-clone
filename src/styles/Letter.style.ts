import styled from "styled-components";

type LetterProps = {
  $base?: boolean
}

export const LetterContainer = styled.div<LetterProps>`
  display: flex;
  position: ${({$base}) => ($base && 'absolute')};
  z-index: ${({$base}) => ($base && '-1')};
`

export const Letter = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 62px;
  height: 62px;
  font-size: 2rem;
  font-weight: bold;
  background-color: rgb(129, 131, 132);
  margin: 5px;

  &.correct {
    background-color: rgb(83, 141, 78);
  }

  &.partial {
    background-color: rgb(181, 159, 59);
  }

  &.incorrect {
    background-color: rgb(58, 58, 60);
  }
`

export const Form = styled.form`
  height: 0;
  opacity: 0;
`
