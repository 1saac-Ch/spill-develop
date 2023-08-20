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
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        xl: '72px',
      },
      screens: {
        '3xl': '1220px',
      },
    },
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

        background: 'var(--background)',
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        border: 'var(--border)',
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

        'display-sm': ['36px', { lineHeight: '44px' }],
        'display-md': ['45px', { lineHeight: '52px' }],
        'display-lg': ['57px', { lineHeight: '64px' }],

        'headline-sm': ['24px', { lineHeight: '32px' }],
        'headline-md': ['28px', { lineHeight: '36px', letterSpacing: '0.1px' }],
        'headline-lg': ['32px', { lineHeight: '40px' }],

        'title-sm': ['14px', { lineHeight: '20px', letterSpacing: '0.1px' }],
        'title-md': ['16px', { lineHeight: '24px', letterSpacing: '0.15px' }],
        'title-lg': ['22px', { lineHeight: '28px', letterSpacing: '0.5px' }],

        'label-sm': ['11px', { lineHeight: '16px', letterSpacing: '0.5px' }],
        'label-md': ['12px', { lineHeight: '16px', letterSpacing: '0.5px' }],
        'label-lg': ['14px', { lineHeight: '20px', letterSpacing: '0.1px' }],

        'body-xs': ['10px', { lineHeight: '16px', letterSpacing: '0.4px' }],
        'body-sm': ['12px', { lineHeight: '16px', letterSpacing: '0.4px' }],
        'body-md': ['14px', { lineHeight: '20px', letterSpacing: '0.25px' }],
        'body-lg': ['16px', { lineHeight: '24px', letterSpacing: '0.15px' }],
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
      boxShadow: {
        low: ' 0px 4px 4px rgba(77, 77, 77, 0.12)',
        medium: '0px 4px 16px rgba(77, 77, 77, 0.12)',
        hight: '0px 4px 36px rgba(77, 77, 77, 0.12)',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
