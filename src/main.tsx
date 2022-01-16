import { StrictMode } from "react"

import { render } from "react-dom"
import App from "src/App"
import { BaseStyles } from "src/styles/Base"

render(
  <StrictMode>
    <BaseStyles />
    <App />
  </StrictMode>,
  document.getElementById("root")
)
