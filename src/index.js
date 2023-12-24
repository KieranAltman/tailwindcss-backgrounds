const plugin = require('tailwindcss/plugin')

const examplePlugin = plugin(({ theme, addBase, addUtilities, matchUtilities }) => {
  addBase({
    '*': {
      '--tw-bg-dot-gap': theme('spacing.8'),
      '--tw-bg-grid-gap': theme('spacing.8'),
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
      'background-image': 'radial-gradient(circle, rgba(0,0,0,.5) 1px, transparent 0);',
      'background-size': 'var(--tw-bg-dot-gap) var(--tw-bg-dot-gap);',
    },
    '.bg-grid': {
      'background-image': `linear-gradient(to right, rgba(0,0,0,.5) 1px, transparent 0), linear-gradient(to top, rgba(0,0,0,.5) 1px, transparent 0);`,
      'background-size': 'var(--tw-bg-grid-gap) var(--tw-bg-grid-gap);',
    },
  })
  matchUtilities(
    {
      'bg-dot': (color) => ({
        'background-image': `radial-gradient(circle, ${color} 1px, transparent 0);`,
        'background-size': 'var(--tw-bg-dot-gap) var(--tw-bg-dot-gap);',
      }),
      'bg-grid': (color) => ({
        'background-image': `linear-gradient(to right, ${color} 1px, transparent 0), linear-gradient(to top, ${color} 1px, transparent 0);`,
        'background-size': 'var(--tw-bg-grid-gap) var(--tw-bg-grid-gap);',
        'background-position': 'calc(var(--tw-bg-grid-gap)/-3) calc(var(--tw-bg-grid-gap)/-3);',
      }),
    },
    {
      values: flattenColorPalette(theme('colors')),
      type: 'color',
    }
  )
})

module.exports = examplePlugin
