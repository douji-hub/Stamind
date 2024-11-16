import withMT from '@material-tailwind/react/utils/withMT'

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    './@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        stamind: {
          white: {
            '000': '#FFFFFF',
            '100': '#EEEFFC',
            '150': '#E0E1EC',
            '200': '#D2D3E0',
          },
          grey: {
            '200': '#858699',
            '300': '#4D4F69',
            '400': '#393A4B',
            '600': '#272832',
            '800': '#313248',
          },
          black: {
            '400': '#2C2D3C',
            '600': '#292A35',
            '800': '#191A23',
            '850': '#151621',
          },
          'primary-blue': {
            '200': '#71A5DD',
            '600': '#37466C',
            '800': '#2058AF',
            '900': '#064AB5',
          },
          specific: {
            background_primary: '#181921',
            'letter-bg': '#9595BD',
            'file-bg': '#434563',
            'issue-bg': '#595974',
            'text-bg': '#1D1E2B',
            'sub-issue-bg': '#131420',
            'button-bg': '#858698',
            'button-issue-hover-bg': '#5E5D7B',
            'command-bar-bg': '#1D1E2B',
            'tooltip-bg': '#202128',
            'button-hover': '#272832',
            'sub-issue-hover': '#1B1C29',
            'command-bar-border': '#52526F',
            'icon-default': '#D8E0FE',
            divider: '#52526F',
            'checkbox-border': '#DCD8FE',
          },
          decoration: {
            'primary-1': '#4EA7FC',
            'primary-2': '#00B2BF',
            'error-1': '#EB5757',
            'error-2': '#FA6563',
            'warn-1': '#F2C94C',
            'warn-2': '#F2994A',
            purple: '#BB87FC',
            block: '#95A2B3',
            success: '#4CB782',
          },
        },
      },
      keyframes: {
        loginSlideOut: {
          '0%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(-100%)', opacity: 0 },
        },
        loginSlideUp: {
          '0%': { transform: 'translateY()' },
          '100%': { transform: 'translateY(-200%)' },
        },
        loginSlideIn: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(-80%)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        loginSlideOut: 'loginSlideOut 1s ease forwards',
        loginSlideUp: 'loginSlideUp 1s ease forwards',
        loginSlideIn: 'loginSlideIn 1s ease forwards',
        fadeIn: 'fadeIn 0.8s ease forwards',
      },
    },
  },
  plugins: [],
})
