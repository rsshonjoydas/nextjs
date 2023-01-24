/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgba(155, 89, 182,1.0)',
          50: 'rgba(142, 68, 173,1.0)',
          100: 'rgb(243 232 255)',
          200: 'rgb(233 213 255)',
          300: 'rgb(216 180 254)',
          400: 'rgb(192 132 252)',
          500: 'rgb(168 85 247)',
          600: 'rgb(147 51 234)',
          700: 'rgb(126 34 206)',
          800: 'rgb(107 33 168)',
          900: 'rgb(88 28 135)',
        },
        secondary: {
          DEFAULT: 'rgba(162, 155, 254,1.0)',
          50: 'rgba(108, 92, 231,1.0)',
          100: 'rgb(237 233 254)',
          200: 'rgb(221 214 254)',
          300: 'rgb(196 181 253)',
          400: 'rgb(167 139 250)',
          500: 'rgb(139 92 246)',
          600: 'rgb(124 58 237)',
          700: 'rgb(109 40 217)',
          800: 'rgb(91 33 182)',
          900: 'rgb(76 29 149)',
        },
        error: {
          300: 'rgba(231, 76, 60,1.0)',
          600: 'rgba(192, 57, 43,1.0)',
        },
        warn: {
          300: 'rgba(241, 196, 15,1.0)',
          600: 'rgba(243, 156, 18,1.0)',
        },
        info: {
          300: 'rgba(52, 152, 219,1.0)',
          600: 'rgba(41, 128, 185,1.0)',
        },
        success: {
          300: 'rgba(46, 204, 113,1.0)',
          600: 'rgba(39, 174, 96,1.0)',
        },
        light: {
          DEFAULT: 'rgba(255, 255, 255,1.0)',
          100: 'rgba(241, 242, 246,1.0)',
          200: 'rgba(236, 240, 241,1.0)',
          300: 'rgba(223, 228, 234,1.0)',
          400: 'rgba(223, 230, 233,1.0)',
          500: 'rgba(206, 214, 224,1.0)',
          600: 'rgba(189, 195, 199,1.0)',
          700: 'rgba(178, 190, 195,1.0)',
          800: 'rgba(149, 165, 166,1.0)',
          900: 'rgba(127, 140, 141,1.0)',
        },
        dark: {
          DEFAULT: 'rgba(45, 52, 54,1.0)',
          100: 'rgba(47, 53, 66,1.0)',
          200: 'rgba(44, 62, 80,1.0)',
          300: 'rgba(52, 73, 94,1.0)',
          400: 'rgba(75, 101, 132,1.0)',
          500: 'rgba(119, 140, 163,1.0)',
          600: 'rgba(164, 176, 190,1.0)',
          700: 'rgba(116, 125, 140,1.0)',
          800: 'rgba(99, 110, 114,1.0)',
          900: 'rgba(87, 96, 111,1.0)',
        },
        gradient: {
          orange: 'linear-gradient(10deg, #ffaa00, #ff6a00)',
          purple: 'linear-gradient(15deg, #ef5dff, #b648ff)',
          green: 'linear-gradient(15deg, #6adb00, #04e800)',
          success: 'linear-gradient(15deg, #6adb00, #04e800)',
          error: 'linear-gradient(15deg, #ff596d, #d72c2c)',
          warning: 'linear-gradient(15deg, #ffac37, #ff9238)',
          light: 'linear-gradient(15deg, #e7e7e7, #f4f4f4)',
          dark: 'linear-gradient(15deg, #202121, #292a2d)',
        },
      },
      fontFamily: {
        sans: ['Roboto, sans-serif', ...defaultTheme.fontFamily.sans],
        poppins: 'Poppins, sans-serif;',
        montserrat: 'Montserrat, sans-serif;',
        cursive: 'Moon Dance, sans-serif',
      },
      boxShadow: {
        'light-shadow':
          'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -30px, rgba(0, 0, 0, 0.3) 0px 30px 60px -40px',
        'dark-shadow': 'box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
      },
    },
  },
  variant: {
    extend: {
      boxShadow: ['dark'],
    },
  },
  plugins: [
    require('tailwindcss'),
    require('postcss'),
    require('autoprefixer'),
  ],
};
