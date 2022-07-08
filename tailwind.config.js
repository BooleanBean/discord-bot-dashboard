/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./src/common/**/*.{js,ts,jsx,tsx}",
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/utils/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        container: {
            padding: {
                DEFAULT: "1.5rem",
                sm: "2rem",
                lg: "3.5rem",
                xl: "4rem",
                "2xl": "5.5rem"
            }
        },
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"]
            },
            colors: {
                spinner: "white"
            }
        }
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("flowbite/plugin"),
        require("@tailwindcss/typography"),
        require("tailwind-gradient-mask-image")
    ]
};
