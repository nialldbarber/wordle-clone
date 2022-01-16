import { forwardRef } from "react"

type GuessRowProps = {
  value?: any
  onChange?: any
  onClick?: any
  disabled?: boolean
}

const GuessRow = forwardRef(
  ({ value, onChange, onClick, disabled }: GuessRowProps, ref) => {
    const disableTab = (e: any) => {
      if (e.key === "Tab") {
        e.preventDefault()
      }
    }

    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            onClick()
          }}
        >
          <input
            ref={ref}
            type="text"
            tabIndex={-1}
            onKeyDown={disableTab}
            maxLength={5}
            value={value}
            onChange={onChange}
          />
          <button disabled={value?.length < 5 ?? true}> +</button>
        </form>
      </div>
    )
  }
)

export default GuessRow
