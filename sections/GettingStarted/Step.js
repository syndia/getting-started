import React from "react"
import { createContainer, query } from "@phenomic/preset-react-app/lib/client";
import { StyleSheet, Text, View } from "react-primitives"

import ActivityIndicator from "../../internals/ActivityIndicator"
import MarkdownGenerated from "../../internals/MarkdownGenerated"

const GettingStartedStep = ({ step, isLoading }) => (
  <View style={ styles.root }>
    { isLoading && <ActivityIndicator /> }
    { ! isLoading &&
      <View style={ styles.content }>
        <MarkdownGenerated body={ step.node.body } />
      </View>
    }
  </View>
)

const styles = StyleSheet.create({
  root: {
    flexDirection: "column",
    alignItems: "flex-start",
    width: "calc(100vw - 264px)",
  },

  content: {
    alignSelf: "center",
    maxWidth: 600,
    paddingHorizontal: 10,
  },
})

export default createContainer(GettingStartedStep, props => ({
  step: query({
    collection: "getting-started",
    id: props.params.splat,
  }),
}))
