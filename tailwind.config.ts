import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {

        // Core Brand Colors
        black: '#000000',
        primary: '#506447',
        'on-primary': '#ffffff',
        'primary-container': '#8da382',
        'on-primary-container': '#263920',
        
        secondary: '#625e52',
        'on-secondary': '#ffffff',
        'secondary-container': '#e8e2d2',
        'on-secondary-container': '#686458',

        tertiary: '#6d5b4f',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#ae988b',
        'on-tertiary-container': '#403127',

        // UI Surface Colors
        background: '#f9f9f9',
        surface: '#f9f9f9',
        'on-surface': '#1a1c1c',
        'on-surface-variant': '#444840',
        
        'surface-container-low': '#f3f3f3',
        'surface-container': '#eeeeee',
        'surface-container-high': '#e6e6e6',

        // Utility Colors
        outline: '#74786f',
        'outline-variant': '#c4c8bd',
      },
      fontFamily: {
        serif: ['"Noto Serif"', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'safe-top': 'var(--safe-area-inset-top)',
        'safe-bottom': 'var(--safe-area-inset-bottom)',
      },
    },
  },
  plugins: [],
};

export default config;
