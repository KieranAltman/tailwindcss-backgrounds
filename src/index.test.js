const path = require('path')
const currentPlugin = require('.')
const postcss = require('postcss')
const tailwindcss = require('tailwindcss')

function run(config, css = '@tailwind utilities', plugin = tailwindcss) {
  let { currentTestName } = expect.getState()
  config = {
    ...{
      plugins: [currentPlugin],
      corePlugins: {
        preflight: false,
      },
    },
    ...config,
  }

  return postcss(plugin(config)).process(css, {
    from: `${path.resolve(__filename)}?test=${currentTestName}`,
  })
}

it('addBase', () => {
  const config = {
    content: [{ raw: String.raw`<div></div>` }],
    corePlugins: {
      preflight: true,
    },
  }

  return run(config, '@tailwind base; @tailwind utilities').then((result) => {
    expect(result.css).toContain('--tw-bg-dot-gap: 2rem;')
  })
})
