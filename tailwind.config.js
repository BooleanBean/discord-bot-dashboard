// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme');

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
      },
      colors: {
        'tw-background': 'var(--background)',
        'tw-background-secondary': 'var(--background-secondary)',
        'tw-primary': 'var(--primary)',
        'tw-primary-light': 'var(--primary-light)',
        'tw-primary-medium': 'var(--primary-medium)',
        'tw-primary-dark': 'var(--primary-dark)',
        'tw-secondary': 'var(--secondary)',
        primary: {
          50: withOpacity('--tw-color-primary-50'),
          100: withOpacity('--tw-color-primary-100'),
          200: withOpacity('--tw-color-primary-200'),
          300: withOpacity('--tw-color-primary-300'),
          400: withOpacity('--tw-color-primary-400'),
          500: withOpacity('--tw-color-primary-500'),
          600: withOpacity('--tw-color-primary-600'),
          700: withOpacity('--tw-color-primary-700'),
          800: withOpacity('--tw-color-primary-800'),
          900: withOpacity('--tw-color-primary-900'),
        },
        dark: '#222222',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
};