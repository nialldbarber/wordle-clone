import { forwardRef, useState } from "react"

type GuessRowProps = {
  value?: any
  onChange?: any
  onClick?: any
  disabled?: boolean
}

const GuessRow = forwardRef(
  ({ value, onChange, onClick, disabled }: GuessRowProps, ref) => {
    return (
      <div>
        <p>guess row</p>
        <input
          ref={ref}
          type="text"
          maxLength={5}
          value={value}
          onChange={onChange}
        />
        <button
          disabled={value?.length < 5 ?? true}
          onClick={onClick}
        >
          +
        </button>
      </div>
    )
  }
)

export default GuessRow
