import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/views/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                default: '#000000',
                standard: '#353535',
                primary: '#2E6A99',
                secondary: '#FFFFFF',
                active: '#FFEB92',
                "purple-light": "#CFCEFF",
                "purple-dark": "#5F31C1",
                "black-80": "rgba(0, 0, 0, 0.80)",
                "white-80": "rgba(255, 255, 255, 0.80)",
                "grey-dark": "#353535",
                "blue-light": "#BFE8FF",
                "blue-dark": "#004973",
            },
        },
        fontFamily: {
            logo: ['"Montserrat Alternates"', 'sans-serif'],
            text: ['Lato', 'sans-serif'],
            heading: ['Raleway', 'sans-serif'],
        },
    },
    plugins: [],
};
export default config;
