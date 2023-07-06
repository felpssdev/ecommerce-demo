/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/loaders/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'xxs': { 'min': '350px', 'max': '374px' },
        // => @media (min-width: 350px and max-width: 374px) { ... },

        'xs': { 'min': '375px', 'max': '410px' },
        // => @media (min-width: 375px and max-width:410px) { ... }

        's': { 'min': '411px', 'max': '639px' },
        // => @media (min-width: 411px and max-width: 639px) { ... }

        'sm': { 'min': '640px', 'max': '767px' },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        'md': { 'min': '768px', 'max': '1022px' },
        // => @media (min-width: 768px and max-width: 1022px) { ... }

        'lg': { 'min': '1023px', 'max': '1279px' },
        // => @media (min-width: 1023px and max-width: 1279px) { ... }

        'xl': { 'min': '1280px', 'max': '1535px' },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        '2xl': { 'min': '1536px' },
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar-hide')
  ],
}
