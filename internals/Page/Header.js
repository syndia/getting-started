import React from "react"
import { StyleSheet, Text, View } from "react-primitives"
import Head from "react-helmet"

import BackgroundGradient from "../BackgroundGradient"

const Header = ({ headTitle, title, style, children }) => (
  <BackgroundGradient style={ style } start="#006BF6" end="10E951">
    <Head><title>{ headTitle || title }</title></Head>
    <Text style={ styles.heroText }>{ title }</Text>
    { children && <View style={ styles.children }>{ children }</View> }
  </BackgroundGradient>
)

const styles = StyleSheet.create({
  heroText: {},

  children: {},
})

export default Header
