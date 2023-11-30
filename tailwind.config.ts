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
        sun: {
          "0%": { transform: "rotate(90deg)" },
          "30%": { transform: "rotate(0deg)", display: "none" },
          "70%": { transform: "rotate(180deg)", display: "none" },
          "100%": { transform: "rotate(90deg)" },
        },
        rainbowShadow: {
          "0%": {
            boxShadow:
              "0px 0px 15px 5px rgb(255,0,0), 0px 0px 30px 5px rgb(255,255,0), 0px 0px 45px 5px rgb(0,192,255)",
          },
          "25%": {
            boxShadow:
              "0px 0px 15px 5px rgb(192,0,255), 0px 0px 30px 5px rgb(255,0,0), 0px 0px 45px 5px rgb(255,255,0)",
          },
          "50%": {
            boxShadow:
              "0px 0px 15px 5px rgb(0,192,255), 0px 0px 30px 5px rgb(192,0,255), 0px 0px 45px 5px rgb(255,0,0)",
          },
          "75%": {
            boxShadow:
              "0px 0px 15px 5px rgb(255,255,0), 0px 0px 30px 5px rgb(0,192,255), 0px 0px 45px 5px rgb(192,0,255)",
          },
          "100%": {
            boxShadow:
              "0px 0px 15px 5px rgb(255,0,0), 0px 0px 30px 5px rgb(255,255,0), 0px 0px 45px 5px rgb(0,192,255)",
          },
        },
      },
      animation: {
        dayNight: "dayNight 20s linear infinite",
        stars: "stars 20s linear infinite",
        rainbowShadow: "rainbowShadow 3s linear infinite",
        sun: "sun 20s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;

//rgb(176,254,255) day
//rgb(241,175,87) sunset
//rgb(32,34,69) night
