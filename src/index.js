const plugin = require('tailwindcss/plugin')
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')

const examplePlugin = plugin(({ theme, addBase, addUtilities, matchUtilities }) => {
  addBase({
    '*': {
      '--tw-bg-dot-gap': theme('spacing.8'),
      '--tw-bg-dot-color': 'rgba(0,0,0,.5)',
      '--tw-bg-grid-gap': theme('spacing.8'),
      '--tw-bg-grid-color': 'rgba(0,0,0,.5)',
    },
  })

  // bg size
  matchUtilities(
    {
      'bg-size': (value) => ({ 'background-size': `${value} ${value};` }),
      'bg-dot-gap': (value) => ({ '--tw-bg-dot-gap': `${value}` }),
      'bg-grid-gap': (value) => ({ '--tw-bg-grid-gap': `${value}` }),
    },
    { values: theme('spacing') }
  )

  // bg dot
  addUtilities({
    '.bg-dot': {
      'background-image': 'radial-gradient(circle, var(--tw-bg-dot-color) 1px, transparent 0);',
      'background-size': 'var(--tw-bg-dot-gap) var(--tw-bg-dot-gap);',
    },
    '.bg-grid': {
      'background-image': `
        linear-gradient(to right, var(--tw-bg-grid-color) 1px, transparent 0),
        linear-gradient(to top, var(--tw-bg-grid-color) 1px, transparent 0);
      `,
      'background-size': 'var(--tw-bg-grid-gap) var(--tw-bg-grid-gap);',

      // @note: remove border lines
      'mask-image': `
        linear-gradient(to right, transparent 1px, black 0),
        linear-gradient(to top, transparent 1px, black 0)
      `,
      'mask-composite': 'intersect',
    },
  })
  matchUtilities(
    {
      'bg-dot': (color) => ({ '--tw-bg-dot-color': color }),
      'bg-grid': (color) => ({ '--tw-bg-grid-color': color }),
    },
    {
      values: flattenColorPalette(theme('colors')),
      type: 'color',
    }
  )
})

module.exports = examplePlugin
