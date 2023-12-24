<div align="center">
  <img src="./.github/tailwindcss-mark.svg" alt="Tailwind CSS" width="108" height="66">
  <h1>@freeloop/tailwindcss-backgrounds</h1>
  <p>Tailwindcss plugin with dot background & grid background.</p>

  <p>
    <a href="https://github.com/zh-kai/tailwindcss-backgrounds/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/maizzle/tailwindcss-plugin-starter" alt="License">
    </a>
  </p>
</div>

## Installation

Install the plugin from npm:

```sh
npm install @freeloop/tailwindcss-backgrounds
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@freeloop/tailwindcss-backgrounds'),
    // ...
  ],
}
```

## Usage

- `bg-dot-{color}`: Control the dot background color.
- `bg-dot-gap-{spacing}`: Contral the dot background size.
- `bg-grid-{color}`: Control the grid background color.
- `bg-grid-gap-{spacing}`: Contral the grid background size.

[Playground](https://codesandbox.io/p/devbox/playground-tailwindcss-backgrounds-k4ccq2?embed=1&file=%2Fapp.vue&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clqj3jj3200073b6pxbsfzzyh%2522%252C%2522sizes%2522%253A%255B73.98126463700234%252C26.01873536299766%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clqj3jj3200023b6p0pix6aj4%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clqj3jj3200043b6pdmha7yoq%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clqj3jj3200063b6pwz2dgcfi%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B40%252C60%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clqj3jj3200023b6p0pix6aj4%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clqj3jj3100013b6puwhrdkd0%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%257D%255D%252C%2522id%2522%253A%2522clqj3jj3200023b6p0pix6aj4%2522%252C%2522activeTabId%2522%253A%2522clqj3jj3100013b6puwhrdkd0%2522%257D%252C%2522clqj3jj3200063b6pwz2dgcfi%2522%253A%257B%2522id%2522%253A%2522clqj3jj3200063b6pwz2dgcfi%2522%252C%2522activeTabId%2522%253A%2522clqj3k603007x3b6pratef7oq%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522port%2522%253A3000%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522clqj3k603007x3b6pratef7oq%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%252C%2522clqj3jj3200043b6pdmha7yoq%2522%253A%257B%2522id%2522%253A%2522clqj3jj3200043b6pdmha7yoq%2522%252C%2522activeTabId%2522%253A%2522clqj3q0pw00zx3b6p9y6lu3sq%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522clqj3q0pw00zx3b6p9y6lu3sq%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Afalse%252C%2522sidebarPanelSize%2522%253A0%257D)
