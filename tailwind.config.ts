/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                triton: "#014f6e",
                offwhite: "#f2f3f4",
            },

            keyframes: {
                fadeInDown: {
                    "0%": {
                        opacity: 0,
                        transform: "translateY(-2rem)",
                    },

                    "100%": {
                        opacity: 1,
                        transform: "translateY(0)",
                    },
                },

                fadeInUp: {
                    "0%": {
                        opacity: 0,
                        transform: "translateY(2rem)",
                    },

                    "100%": {
                        opacity: 1,
                        transform: "translateY(0)",
                    },
                },
            },

            animation: {
                "fade-up": "fadeInUp 1s ease-out",
                "fade-down": "fadeInDown 1s ease-out",
            },
        },
    },
};
