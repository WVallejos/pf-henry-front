/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        graym: "#d9d9d9",
        redFred: {
          "100": "#E83B46",
          "200": "#EC5B64",
          "300": "#E83B46",
        },
        blackFred: {
          "100": "#292929",
          "200": "#1F1F1F",
          "300": "#121212",
        },
        whiteFred: {
          "100": "#FAFDFE",
          "200": "#EEF8FC",
          "300": "#DCF1F9",
        },
        orangeFred: {
          "100": "#FFAA33",
          "200": "#FFA21F",
          "300": "#FF9505",
        },
      },
      spacing: {},
      fontFamily: {
        roboto: "roboto",
        inter: "Inter",
        impact: "Impact",
        bayon: "Bayon",
        bebas: "Bebas Neue",
        monse: "Montserrat",
      },
      fontSize: {
        "9xl": "20px",
        "10xl": "25px",
        "30xl": "30px",
        "31xl": "50px",
        "21xl": "40px",
        "51xl": "70px",
        inherit: "inherit",
      },
    },
    screens: {
      'sm': {'max': '640px'},
      'md': {'max': '1280px'},
      'lg': {'max': '1440px'},
      'xl': {'max': '1920px'},
      'sxl':{'max': '2560px'},
    },
  },
  corePlugins: {
    preflight: false,
  },
};
