module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#EBF9C1",
          300: "#CAE868",
          500: "#ABD131",
          700: "#657D1A",
          900: "#3A4710"
        },
        secondary: {
          100: "#E4FBDC",
          300: "#97E07C",
          500: "#60BE3E",
          700: "#3A7A23",
          900: "#224714"
        },
        tertiary: {
          100: "#F9F9CF",
          300: "#F3F38B",
          500: "#DDDC25",
          700: "#747320",
          900: "#403F0B"
        },
        lightGrey: {
          100: "#FFFFFF",
          300: "#F4F5F2",
          500: "#E0E0DE",
          700: "#CCCCCA",
          900: "#B7B8B6"
        },
        darkGrey: {
          100: "#8E8F8D",
          300: "#666665",
          500: "#3D3D3C",
          700: "#292928",
          900: "#141414"
        }
      },
      fontFamily: {
        body: ["Sora"]
      }
    }
  },
  plugins: []
};
