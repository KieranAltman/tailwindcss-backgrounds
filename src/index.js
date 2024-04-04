const plugin = require('tailwindcss/plugin')
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')

const examplePlugin = plugin(({ theme, addBase, addUtilities, matchUtilities }) => {
  addBase({
    '*': {
      '--tw-bg-dot-gap': theme('spacing.8'),
      '--tw-bg-dot-color': 'rgba(0,0,0,.5)',
      '--tw-bg-grid-gap': theme('spacing.8'),
      '--tw-bg-grid-color': 'rgba(0,0,0,.5)',
      '--tw-bg-pixel-size': theme('spacing.4'),
      '--tw-bg-pixel-color': 'rgba(0,0,0,.5)',
    },
  })

  // bg size
  matchUtilities(
    {
      'bg-size': (value) => ({ 'background-size': `${value} ${value};` }),
      'bg-dot-gap': (value) => ({ '--tw-bg-dot-gap': `${value}` }),
      'bg-grid-gap': (value) => ({ '--tw-bg-grid-gap': `${value}` }),
      'bg-pixel-size': (value) => ({ '--tw-bg-pixel-size': `${value}` }),
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
    '.bg-pixel': {
      'background-image': `
        linear-gradient(45deg, var(--tw-bg-pixel-color) 25%, transparent 25%, transparent 75%, var(--tw-bg-pixel-color) 75%), 
        linear-gradient(45deg, var(--tw-bg-pixel-color) 25%, transparent 25%, transparent 75%, var(--tw-bg-pixel-color) 75%);
      `,
      'background-position':
        '0 0, calc(var(--tw-bg-pixel-size)/2) calc(var(--tw-bg-pixel-size)/2);',
      'background-size': 'var(--tw-bg-pixel-size) var(--tw-bg-pixel-size);',
    },
  })
  matchUtilities(
    {
      'bg-dot': (color) => ({ '--tw-bg-dot-color': color }),
      'bg-grid': (color) => ({ '--tw-bg-grid-color': color }),
      'bg-pixel': (color) => ({ '--tw-bg-pixel-color': color }),
    },
    {
      values: flattenColorPalette(theme('colors')),
      type: 'color',
    }
  )
})

module.exports = examplePlugin
