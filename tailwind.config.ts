import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: 'jit',
  jit: true,
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    container: {
      padding: {
        DEFAULT: '16px',
      },
    },
    colors: {
      transparent: 'transparent',
      'green': '#D2EF9A',
      'black': '#1F1F1F',
      'secondary': '#696C70',
      'secondary2': '#A0A0A0',
      'white': '#ffffff',
      'surface': '#F7F7F7',
      'red': '#DB4444',
      'purple': '#8684D4',
      'success': '#3DAB25',
      'yellow': '#ECB018',
      'pink': '#F4407D',
      'line': '#E9E9E9',
      'outline': 'rgba(0, 0, 0, 0.15)',
      'surface2': 'rgba(255, 255, 255, 0.2)',
      'surface1': 'rgba(255, 255, 255, 0.1)',
    },
  },
  plugins: [],
}
export default config
