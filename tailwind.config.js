const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false,
    theme: {
        fontFamily: {
            sans: ["Kanit", ...defaultTheme.fontFamily.sans],
            headline: ["Hexagon"],
            handwriting: ["'Reenie Beanie'"],
        },
        extend: {
            colors: {
                gray: {
                    light: "#f0f0f0",
                },
            },
            height: {
                680: "680px",
                560: "560px",
                110: "32rem",
            },
            width: {
                inherit: "inherit",
                768: "768px",
                110: "32rem",
                "6/5": "120%",
            },
            gridTemplateRows: {
                // Simple 8 row grid
                8: "repeat(8, minmax(0, 1fr))",

                // Complex site-specific row configuration
                layout: "200px minmax(900px, 1fr) 100px",
            },
            borderWidth: {
                0.75: "0.75rem",
            },
            zIndex: {
                "-10": "-10",
            },
            animation: {
                slide: "slide 5s linear infinite",
                slideslow: "slide 15s linear infinite",
                slidesuperslow: "slide 30s linear infinite",
            },
            keyframes: {
                slide: {
                    from: {
                        transform: "translate(0%, 0)",
                    },
                    to: {
                        transform: "translate(-50%, 0)",
                    },
                },
                slideslow: {
                    from: {
                        transform: "translate(0%, 0)",
                    },
                    to: {
                        transform: "translate(-50%, 0)",
                    },
                },
                slidesuperslow: {
                    from: {
                        transform: "translate(0%, 0)",
                    },
                    to: {
                        transform: "translate(-50%, 0)",
                    },
                },
            },
            rotate: {
                270: "270deg",
            },
            fontSize: {
                "10xl": "10rem",
                "1/6": "20vh",
            },
            lineHeight: {
                "10rem": "8rem",
                "7rem": "4rem",
                "6rem": "3rem",
                "1/6": "16.7vh",
            },
            minHeight: {
                560: "560px",
            },
            maxHeight: {
                480: "480px",
                "50screen": "50vh",
            },
            maxWidth: {
                480: "480px",
                "80screen": "80vw",
            },
            margin: {
                "w1/5": "20vw",
            },
            padding: {
                "w1/5": "20vw",
            },
        },
    },
    variants: {
        extend: {
            textTransform: ["hover", "focus"],
            margin: ["hover"],
            padding: ["hover"],
            dropShadow: ["hover", "focus"],
            display: ["hover", "focus"],
            fontStyle: ["hover", "focus"],
        },
    },
    plugins: [require("tailwindcss-textshadow")],
};
