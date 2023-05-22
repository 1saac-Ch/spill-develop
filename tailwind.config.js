/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#1598CC',
        },
        dark: '#1A1A1A',
        abu: '#A6A6A6',
        abu2: '#8C8C8C',
        pink: '#F22178',

        linear: 'linear-gradient(90deg, #F364D9 65.35%, #A702FF 79.92%);',
      },
      backgroundImage: {
        radial:
          'radial-gradient(50% 50% at 100% 0%, rgba(229, 97, 223, 0.37) 0%, rgba(17, 24, 39, 0) 100%),radial-gradient(50% 50% at 100% 100%, rgba(229, 97, 223, 0.37) 0%, rgba(17, 24, 39, 0) 100%),radial-gradient(50% 50% at 30% 20%, rgba(48, 2, 255, 0.37) 0%, rgba(17, 24, 39, 0) 100%),radial-gradient(50% 50% at 0% 100%, rgba(126, 7, 197, 0.37) 0%, rgba(17, 24, 39, 0) 100%),radial-gradient(50% 50% at 140% 50%, #00CDFA 0%, rgba(17, 24, 39, 0) 100%)',
        linear: 'linear-gradient(90deg, #F364D9 65.35%, #A702FF 79.92%);',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
      fontSize: {
        large: '28px',
        xlarge: '32px',
        xxlarge: '36px',
        xxxlarge: '40px',
        small: '14px',
        medium: '24px',
        xmedium: '20px',
        xxmedium: '16px',
      },
      fontWeight: {
        tebal: '700',
        normal: '400',
      },
      lineHeight: {
        height: '36px',
        medium: '24px',
        low: '20px',
      },
      textColor: {
        fill: '-webkit-text-fill-color',
      },
    },
  },
}
