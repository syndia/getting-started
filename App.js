import React from "react"
import { browserHistory, IndexRedirect, Route, Router } from "react-router"
import { createApp, renderApp } from "@phenomic/preset-react-app/lib/client"

import "./default.css"

import { Html, Header as ApplicationHeader, Footer as ApplicationFooter } from "./application"
import { BaseLayout, SingleLayout } from "./layouts"
import { Homepage, NotFound } from "./pages"
import {
  GettingStartedStepsList,
  GettingStartedStep,
  GettingStartedPlaceholder
} from "./sections/GettingStarted"

const defaultComponents = {
  header: ApplicationHeader,
  footer: ApplicationFooter,
}

// @todo easy load sections
const routes = () => (
  <Router history={ browserHistory }>
    <Route path="/">
      <IndexRedirect to="start" />

      <Route components={ SingleLayout }>
        <Route path="start" components={{ ...defaultComponents, content: Homepage }} />
      </Route>

      <Route component={ BaseLayout }>
        <Route path="getting-started"
          components={{
            ...defaultComponents,
            primary: GettingStartedStepsList,
            placeholder: GettingStartedPlaceholder,
          }}
        />

        <Route path="getting-started/*"
          components={{
            ...defaultComponents,
            primary: GettingStartedStepsList,
            secondary: GettingStartedStep,
          }}
        />
      </Route>
    </Route>

    <Route component={ SingleLayout }>
      <Route path="*" components={{ ...defaultComponents, content: NotFound }} />
    </Route>
  </Router>
)

export default createApp(routes, Html)

if (module.hot) module.hot.accept(() => renderApp(routes))

// kill previous website ServerWorker
if (typeof navigator !== "undefined" && "serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    for (const registration of registrations) registration.unregister()
  })
}
