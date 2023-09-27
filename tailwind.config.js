/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      fontFamily: {
        'gloria': ['"Gloria Hallelujah"', 'cursive'],
      },
      backgroundImage: {
        'union': "url('/Union.png')",
        'footer-background': "url('/Vector 2.png')",
      },
      backgroundSize: {
        'union': '80px 89px',
        'footer-background': 'cover',
      },
    },
  },
  plugins: [],
}
