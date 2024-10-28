import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EF3B66',
        gray: {
          100: '#1b1b1b',
          300: '#292929',
          600: '#727272',
          900: '#131313'
        }
      },
      fontFamily: {
        'nunito-sans': ["Nunito Sans", 'sans-serif'],
        display: ["Nunito Sans", 'sans-serif'],
        body: ["Inter", 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
