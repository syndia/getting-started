import React from "react"
import { StyleSheet, Text, View } from "react-primitives"

import Link from "../internals/Link"

const Footer = () => (
  <View style={ styles.root }>
    <Text style={ styles.text }>
      { "Website by "}
    </Text>
    <Link href="https://www.syndia.nl" style={ styles.link }>
      <Text style={ styles.text }>{ "Syndia.nl" }</Text>
    </Link>
    <Text style={ styles.text }>
      { " Made with ♥ and " }
    </Text>
    <Link href="https://phenomic.io" target="_blank" style={ styles.link }>
      <Text style={ styles.text }>{ "<Phenomic />" }</Text>
    </Link>
  </View>
)

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "3rem",
  },

  text: {
    alignSelf: "center",
    lineHeight: 18,
    fontSize: 14,
    letterSpacing: 0.5,
    opacity: 0.5,
  },

  link: {
    textDecorationLine: "none",
    color: "inherit",
  },
})

export default Footer
