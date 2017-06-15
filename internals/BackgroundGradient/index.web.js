import React from "react"
import { StyleSheet } from "react-primitives"

const BackgroundGradient = ({ start, end, direction, style, children }) => (
  <div
    style={{
      ...rawStyles,
      ...makeGradient(start, end, direction),
    }}
    className={ StyleSheet.resolve(style).className }
  >
    { children }
  </div>
)

const rawStyles = {
  display: "flex",
  flexDirection: "column",
}

const makeGradient = (start, end, direction = "to bottom right") => ({
  backgroundColor: start,
  background: `linear-gradient(${ direction }, ${ start }, ${ end })`
})

export default BackgroundGradient
