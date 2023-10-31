import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        dayNight: {
          "0%": { background: "rgb(176,254,255)" },
          "20%": { background: "rgb(176,254,255)" },
          "25%": { background: "rgb(241,175,87)" },
          "30%": { background: "rgb(32,34,69)" },
          "50%": { background: "rgb(32,34,69)" },
          "70%": { background: "rgb(32,34,69)" },
          "75%": { background: "rgb(241,175,87)" },
          "80%": { background: "rgb(176,254,255)" },
          "100%": { background: "rgb(176,254,255)" },
        },
        stars: {
          "0%": { opacity: "0" },
          "25%": { opacity: "0" },
          "30%": { opacity: "1" },
          "70%": { opacity: "1" },
          "75%": { opacity: "0" },
          "100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

//rgb(176,254,255) day
//rgb(241,175,87) sunset
//rgb(32,34,69) night
