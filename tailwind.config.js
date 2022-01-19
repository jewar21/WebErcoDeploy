module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        5.5: "5.5rem",
        5.25: "5.25rem",
        12.5: "12.5rem",
        18.5: "18.5rem",
        19: "19rem",
        "52rem": "52rem",
      },
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
        Sora: ["Sora", "sans-serif"],
        IBM: ["IBM Plex Sans", "sans-serif"]
      },
      fontWeight: {
        Regular: "400",
        Bold: "700",
        ExtraBold: "800"
      },
      fontSize: {
        display: [
          "4.5em",
          {
            lineHeight: "80px",
            letterSpacing: "-2%"
          }
        ],
        H1: [
          "3.5em",
          {
            lineHeight: "64px",
            letterSpacing: "0"
          }
        ],
        H2: [
          "3em",
          {
            lineHeight: "56px",
            letterSpacing: "0"
          }
        ],
        H3: [
          "2.5em",
          {
            lineHeight: "48px",
            letterSpacing: "0"
          }
        ],
        H4: [
          "2em",
          {
            lineHeight: "40px",
            letterSpacing: "0"
          }
        ],
        H5: [
          "1.5em",
          {
            lineHeight: "32px",
            letterSpacing: "0"
          }
        ],
        H6: [
          "1em",
          {
            lineHeight: "24px",
            letterSpacing: "0"
          }
        ],
        Subtitle: [
          "1em",
          {
            lineHeight: "24px",
            letterSpacing: "0"
          }
        ],
        Body1: [
          "1.125em",
          {
            lineHeight: "32px",
            letterSpacing: "0"
          }
        ],
        Body2: [
          "1em",
          {
            lineHeight: "24px",
            letterSpacing: "0"
          }
        ],
        Body3: [
          "0.875em",
          {
            lineHeight: "24px",
            letterSpacing: "0"
          }
        ],
        Button: [
          "1em",
          {
            lineHeight: "22px",
            letterSpacing: "4%"
          }
        ]
      }
    }
  },
  plugins: []
};
