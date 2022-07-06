module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}', './src/**/*.{html,js}'],
// , "./node_modules/flowbite/**/*.js" , './node_modules/tw-elements/dist/js/**/*.js'
  theme: {
    extend: {
      colors: {
        self: "#36393f",
      },
      animation: {
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
  // plugins: [
  //   require('flowbite/plugin')
  // ]
}
