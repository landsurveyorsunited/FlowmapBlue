import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import { Global, css } from '@emotion/core'
import * as Sentry from '@sentry/browser'

import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/select/lib/css/blueprint-select.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import checkWebglSupport from './checkWebglSupport'
import { ColorScheme } from './colors'

const globalStyles = css`
html, body { 
  font-family: 'Sarabun', sans-serif; 
  font-size: 13pt;
}
a, a:visited { color: ${ColorScheme.primary}; }

section { margin-bottom: 3em; line-height: 1.5em; }
#no-token-warning { bottom: 30px; top: unset !important; left: 10px !important; }
`

if (process.env.REACT_APP_SENTRY_DSN) {
  Sentry.init({
   dsn: process.env.REACT_APP_SENTRY_DSN
  })
}

ReactDOM.render(
  <>
    <Global styles={globalStyles} />
    <App supportsWebGl={checkWebglSupport()} />
  </>,
  document.getElementById('root')
)
