/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  darkMode: 'class', // Enables dark mode using the 'class' strategy
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#004190',
        secondary: '#1391A3',
        accent: '#77BFF2',
        transparent: 'transparent',
      },
      textColor: {
        black: 'var(--text-black)', // Define a CSS variable for dynamic theming
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: '#004190', // bg-primary text-primary border-primary
          secondary: '#1391A3',
          accent: '#77BFF2',
          transparent: 'transparent',
          // 'primary-content': '#ffffff'
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: '#004190',
          secondary: '#1391A3',
          accent: '#77BFF2',
          'white': "#1F2937",
          "text-black": "#ffffff", // Map text-black to white in dark mode
          // 'primary-content': '#a6adbb',
          'info-content': '#a6adbb',
          "gray-800": '#000000',
          "base-100": "#161c24", // Dark background color (use bg-gray-800 or similar)
          "base-200": "#1F2937", // Dark mode secondary background
          "base-300": "#374151", // Dark mode tertiary background
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        }
      },
    ],
    darkTheme: 'dark',
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
    darkMode: ['class', '[data-theme="light"]']
  },
}
