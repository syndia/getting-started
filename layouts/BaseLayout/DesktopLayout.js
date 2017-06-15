import React from "react"
import { StyleSheet, View } from "react-primitives"

const DesktopLayout = ({ header, footer, placeholder, primary, secondary }) => (
  <View style={ styles.root }>
    { header }
    <View style={ styles.content }>
      { primary }
      { !secondary ? placeholder : secondary }
    </View>
    { footer }
  </View>
)

const styles = StyleSheet.create({
  root: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
    minHeight: "100vh",
  },

  content: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
  },
})

export default DesktopLayout
