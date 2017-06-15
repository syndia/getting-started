import React from "react"
import { StyleSheet, Text, View } from "react-primitives"

const NotFound = ({ error }) => {
  const status = (error && error.status) || 404
  const errorText = error && status !== 404
    ? error.statusText
    : "Page not found"

  return (
    <View>
      { errorText }
    </View>
  )
}

export default NotFound
