import { serializePage, type RootView } from '@hono/inertia'

export const rootView: RootView = (page) => `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Inertia Practice</title>
    <script type="module">
      import RefreshRuntime from '/@react-refresh'
      RefreshRuntime.injectIntoGlobalHook(window)
      window.$RefreshReg$ = () => {}
      window.$RefreshSig$ = () => (type) => type
      window.__vite_plugin_react_preamble_installed__ = true
    </script>
    <script type="module" src="/@vite/client"></script>
    <script type="module" src="/src/client/app.tsx"></script>
  </head>
  <body>
    <script data-page="app" type="application/json">${serializePage(page)}</script>
    <div id="app"></div>
  </body>
</html>`
