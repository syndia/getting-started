import React from "react"
import { createContainer, query } from "@phenomic/preset-react-app/lib/client";
import { StyleSheet, View } from "react-primitives"

import ActivityIndicator from "../../internals/ActivityIndicator"

import StepsListItem from './StepsListItem'

const StepsList = ({ isLoading, steps }) => (
  <View style={ styles.root }>
    { isLoading && <ActivityIndicator /> }
    { !isLoading &&
      <View style={styles.container }>
        { steps.node.list.map(item =>
          <StepsListItem key={ item.id } step={ item } />
        )}
      </View>
    }
  </View>
)

const styles = StyleSheet.create({
  root: {
    flexDirection: "column",
    alignItems: "flex-start",
    width: 264,
    paddingHorizontal: 20,
  },
})

export default createContainer(StepsList, () => ({
  steps: query({
    collection: "getting-started",
  })
}))
