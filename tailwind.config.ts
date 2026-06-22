import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1E3A8A',
        orange: '#F97316',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
