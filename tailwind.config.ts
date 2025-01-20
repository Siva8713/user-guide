// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{css,scss}',
  ],
  theme: {
    extend: {
      colors: {
        'guardrails-red-bg': '#FF0000', // Example color
        'guardrails-green-bg': '#00FF00',
        'content-primary': '#171717', // Example color
      },
      fontSize: {
        'high-l': '2rem', 
        'high-s': '1.5rem', // Example text size for 'text-high-l'
      },
      fontFamily: {
        mondelez: ['Mondelez', 'sans-serif'],
        calibri: ['Calibri', 'Arial', 'sans-serif'],
      },
      // Add any other custom configurations here
    },
  },
  plugins: [],
};
