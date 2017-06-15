import React from "react"
import { StyleSheet } from "react-primitives"
import { Link as RouterLink } from "react-router"

const Link = ({ activeClassName, activeStyle, className, style, ...rest }) => {
  const injectedProps = {
    style: style,
    className: className || "",
    activeStyle: activeStyle,
    activeClassName: activeClassName || "",
  }

  if (typeof injectedProps.style === "number") {
    injectedProps.className +=
      " " + StyleSheet.resolve(injectedProps.style).className;
    injectedProps.style = undefined
  }

  if (typeof injectedProps.activeStyle === "number") {
    injectedProps.activeClassName +=
      " " + StyleSheet.resolve(injectedProps.activeStyle).className
    injectedProps.activeStyle = undefined
  }

  return <RouterLink { ...rest } { ...injectedProps } />
};

export default Link
