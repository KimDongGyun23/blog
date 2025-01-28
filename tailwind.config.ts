import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    boxShadow: {
      lg: '0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px -2px 4px 0px rgba(0, 0, 0, 0.15)',
    },
    fontWeight: {
      light: '300',
      medium: '500',
      bold: '700',
    },
    extend: {
      fontFamily: {
        jalnan: ['Jalnan'],
      },
      colors: {
        black: {
          100: '#F3F3F3',
          200: '#D2D0CD',
          300: '#BAB7B3',
          400: '#A09B96',
          500: '#7F7973',
          600: '#595551',
          700: '#4B4641',
        },
        success: '#78BE7B',
        error: '#F3614E',
        dimmed: 'rgba(34, 40, 48, 0.60)',
      },
      utilities: {
        '.webkit-overflow-scrolling-touch': {
          '-webkit-overflow-scrolling': 'touch',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
