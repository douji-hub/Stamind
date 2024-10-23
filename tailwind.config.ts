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
          1: "#064AB5",
          2: "#2058AF",
          3: "#71A5DD",
          4: "#37466C",
        },
        grey: {
          1: "#FFFFFF",
          2: "#EEEFFC",
          3: "#E0E1EC",
          4: "#D2D3E0",
          5: "#858699",
          6: "#4D4F69",
          7: "#393A4B",
          8: "#313248",
          9: "#272832",
          10: "#191A23",
          11: "#151621",
        },
        uiSpecificColor: {
          1: "#DCD8FE50",
          2: "#9595BD20",
          3: "#7C7CA420",
          4: "#D8E0FE90",
          5: "#85869833",
          6: "#52526F40",
          7: "#59597440",
          8: "#686B863D",
          9: "#4345632C",
          10: "#59597440",
          11: "#5E5D7B70",
          12: "#1314204C",
          13: "#1B1C2966",
          14: "#1D1E2B7F",
          15: "#52526F70",
          16: "#1D1E2B7F",
          17: "#181921",
        },
        decoration: {
          1: "#00B2BF",
          2: "#EB5757",
          3: "#FA6563",
          4: "#F2C94C",
          5: "#F2994A",
          6: "#BB87FC",
          7: "#4EA7FC",
          8: "#95A2B3",
          9: "#4CB782",
        },
      },
    },
  },
  plugins: [],
};
export default config;
