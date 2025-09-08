/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./node_modules/@appletosolutions/reactbits/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { extend: {
    fontFamily: {
  sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
},
  } },
  plugins: [],
};