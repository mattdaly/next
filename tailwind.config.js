/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [require('@economic/taco/tailwind.config.js')],
    content: ['./app/**/*.{ts,tsx,css}', './components/**/*.{ts,tsx,css}'],
};
