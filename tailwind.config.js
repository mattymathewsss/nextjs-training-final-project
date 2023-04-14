module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // Ensure these match with .storybook/preview.js
  theme: {
    extend: {
      screens: {
        xs: '375px',
        sm: '600px',
        mdtb: '766px',
        md: '900px',
        lg: '1120px',
        xl: '1536px',
      },
      boxShadow: {
        cardShadow: '0 0 0 1px rgba(23, 23, 23,  0.05)',
      },
      colors: {
        bodyColor: 'rgba(245,245,245)',
        hover: 'rgba(59, 73, 223)',
        hoverTrans50: 'rgba(59, 73, 223, .10)',
        newPostBG: 'rgba(252, 221, 77)',
        newPostFontColor: 'rgba(123, 53, 15)',
        nameHover: '#f5f5f5',
        postDateColor: 'rgb(82, 82, 82)',
        tagHover: 'rgb(232,250,237)',
        tagHoverBorder: 'rgb(26,215,66)',
      },
      borderWidth: {
        1: '1px',
      },
      padding: {
        '1rem': '1rem',
        '.75rem': '.75rem',
        '1.25rem': '1.25rem',
        '3.5rem': '3.5rem',
      },
      height: {
        '50vh': '50vh',
        '20vh': '40vh',
      },
      aspectRatio: {
        'auto650/273': 'auto 650 / 273',
      },
      maxWidth: {
        992: '992px',
        675: '675px',
        360: '360px',
      },
      fontSize: {
        '1.5rem': '1.5rem',
        '3rem': '3rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};