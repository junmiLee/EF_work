/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-hover": "#8b004c",
        "secondary-hover": "#005ba6",
        "button01-hover": "#1b1829",
      },
    },
    borderRadius: {
      "primary-button": "5px",
      "tag-button": "17.5px",
    },
    fontFamily: {
      body: ["Noto Sans KR"],
    },
    fontSize: {
      "2xs": "10px",
      xs: "12px",
      sm: "14px",
      primary: "16px",
      lg: "18px",
      xl: "24px",
      "2xl": "32px",
    },
    colors: {
      primary: "#1b1829",
      main: "#e6007e",
      secondary: "#008cff",
      button01: "#404040",
      white: "#ffffff",
      "board-bg": "#f3f4f6",
      "input-off-bg": "#f9fafb",
      "input-line": "#e5e7eb",
      mono100: " #f1f1f1",
      mono200: " #bebebe",
      mono300: " #d6d7d9",
      error: " #d01e1e",
      social: "#395997",
      "dark-Opacity": "rgba(255, 255, 255, 0.1)",
    },
  },
  plugins: [],
};
