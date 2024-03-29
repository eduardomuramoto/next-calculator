import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "3d": '0px 4px 4px rgba(0,0,0,0.25), 0px 188px 52px rgba(0,0,0,0.01), 0px 120px 48px rgba(0,0,0,0.04), 0px 68px 41px rgba(0,0,0,0.15), 0px 30px 30px rgba(0,0,0,0.26), 0px 8px 17px rgba(0,0,0,0.29), inset 0px 6px 8px rgba(255,255,255, 0.1), inset 0px -4px 5px rgba(0,0,0,0.22);',
        "3d-sm": ' 0px 11px 7px rgba(0,0,0,0.01), 0px 7px 7px rgba(0,0,0,0.04), 0px 4px 6px rgba(0,0,0,0.1), 0px 2px 4px rgba(0,0,0,0.26), 0px 0px 2px rgba(0,0,0,0.29), inset 0px 2px 3px rgba(255,255,255, 0.06);'
      }
    },
  },
  plugins: [],
};
export default config;
