import React from "react"
import { StyleSheet, View } from "react-primitives"

const SingleLayout = ({ content, footer, header }) => (
  <View style={ styles.root }>
    { header }
    { content }
    { footer }
  </View>
)

const styles = StyleSheet.create({
  root: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    minHeight: "100vh",
  },
})

export default SingleLayout
