import * as React from 'react'
import {createRoot, Root} from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import {ThemeProvider} from '@mui/material/styles'
import App from './App'
import theme from './theme'
import {PortalMicroApp} from 'lib/constants'

// Micro-frontend config
const initMicroApp = () => {
  let portalAppRoot: Root
  ;(window as any)[PortalMicroApp.AppNameSpace] = {
    mount: (containerId: string, params?: unknown) => {
      const portalAppContainer = document.getElementById(containerId)
      if (portalAppContainer) {
        // Verify if root has been created or is empty
        const isEmptyContainer = !portalAppContainer.hasChildNodes()
        if (isEmptyContainer) {
          portalAppRoot = createRoot(portalAppContainer)
        }
        portalAppRoot.render(
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>,
        )
      }
    },
    unMount: (containerId: string) => {
      const portalAppContainer = document.getElementById(containerId)
      // React 18 changed unmountComponentAtNode to root.unmount
      if (!portalAppContainer && portalAppRoot) {
        portalAppRoot.unmount()
      }
    },
  }
}

//Local dev config
if (process.env.NODE_ENV === 'development') {
  const container = document.getElementById(PortalMicroApp.HtmlElementId)
  if (container) {
    // React 18 introduces createRoot to enable concurrent mode
    const root = createRoot(container)
    root.render(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>,
    )
  }
  initMicroApp()
} else {
  initMicroApp()
}
