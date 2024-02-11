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
                "Base-White": '#FFF',
                standard: '#353535',
                primary: '#2E6A99',
                secondary: '#4A5568',
                active: '#FFEB92',
                "--Gray-gray-900": "#1A202C",
                "--Gray-gray-700": "#4A5568",
                "Gray/gray-50": "#FAFAFA",
                "--Shade-light-background": "#F9F9FF",
                "Brand/Primary-bg": "#57007B",
                "blue-dark": "#004973",
            },
        },
        fontFamily: {
            logo: ['"Montserrat Alternates"', 'sans-serif'],
            text: ['Inter', 'sans-serif'],
            heading: ['Raleway', 'sans-serif'],
        },
        boxShadow: {
            'nav': '0px 4px 40px 0px rgba(0, 0, 0, 0.10)',
        }
    
    },
    plugins: [],
};
export default config;
