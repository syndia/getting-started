import React from "react"
import MediaQuery from "react-responsive"

import DesktopLayout from "./DesktopLayout"
import MobileLayout from "./MobileLayout"

export const MEDIA_QUERY_MEDIUM = "MEDIA_QUERY_MEDIUM"

const Breakpoints = new Map([
  [MEDIA_QUERY_MEDIUM, "(max-width: 600px)"],
])

const BaseLayout = props => (
  <MediaQuery query={ Breakpoints.get(MEDIA_QUERY_MEDIUM) }>
    { matches => matches ? <MobileLayout { ...props } /> : <DesktopLayout { ...props } /> }
  </MediaQuery>
)

export default BaseLayout
