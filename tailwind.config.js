module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#101820',
                secondary: '#f2aa4cff',
                tertiary: '#080C10',
                quaternary: '#d1d5db',
            },
            fontFamily: {
                poppins: ["'Poppins'", 'sans-serif'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
