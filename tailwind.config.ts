import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        //主色
        primary: {
          'stamind-blue-1000': "#064AB5",
          'stamind-blue-800': "#2058AF",
          'stamind-blue-200': "#71A5DD",
          'stamind-blue': "#37466C",
        },
        lightgrey: {
          'stamind-white': "#FFFFFF",
          'stamind-lightgrey-100': "#EEEFFC",
          'stamind-lightgrey-150': "#E0E1EC",
          'stamind-lightgrey-200': "#D2D3E0",
        },
        grey:{
          'stamind-grey-200': "#858699",
          'stamind-grey-300': "#4D4F69",
          'stamind-grey-400': "#393A4B",
          'stamind-grey-600': "#272832",
          'stamind-grey-800': "#313248",
        },
        black:{
          'stamind-black-400': '#2C2D3C',
          'stamind-black-600': '#292A35',
          'stamind-black-800': "#191A23",
          'stamind-black-850': "#151621",
        },
        uiSpecificColor: {
          'stamind-checkbox-border': "#DCD8FE50",
          'stamind-letter-bg': "#9595BD20",
          'unknown': "#7C7CA420",
          'stamind-icon': "#D8E0FE90",
          'stamind-button-bg': "#85869833",
          'stamind-divider': "#52526F40",
          'stamind-button-issues': "#59597440",
          'stamin-bg-issue': "#59597440",
          'stamind-button-hover': "#686B863D",
          'stamind-file-bg': "#4345632C",
          'stamind-button-border-hover': "#5E5D7B70",
          'stamind-bg-sub-issue': "#1314204C",
          'stamind-sub-hover': "#1B1C2966",
          'stamind-bg-command': "#1D1E2B7F",
          'stamind-bg-command-border': "#52526F70",
          'stamind-tooltip-bg': "#1D1E2B7F",
          'stamind-bg': "#181921",
        },
        decoration: {
          'stamind-decoration-primary-1': "#4EA7FC",
          'stamind-decoration-primary-2': "#00B2BF",
          'stamind-decoration-error-1': "#EB5757",
          'stamind-decoration-error-2': "#FA6563",
          'stamind-decoration-warn-1': "#F2C94C",
          'stamind-decoration-warn-2': "#F2994A",
          'stamind-decoration-purple': "#BB87FC",
          'stamind-decoration-block': "#95A2B3",
          'stamind-decoration-success': "#4CB782",
        },
      },
    },
  },
  plugins: [],
};
export default config;
