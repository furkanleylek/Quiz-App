/** @type {import('tailwindcss').Config} */
module.exports = {
  webpack(config) {
    config.infrastructureLogging = { debug: /PackFileCache/ }
    return config;
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
