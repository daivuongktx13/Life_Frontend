module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation:{
        slide: 'slide 20s linear infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      translate: {
        'xfull': '100%',
      }
    },
  },
  plugins: [],
}
