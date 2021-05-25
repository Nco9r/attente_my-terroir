<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;
}

body {
  overflow-x: hidden;

}

@font-face {
  font-family: 'Pontiac';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('~assets/font/Pontiac.otf') format('truetype');
}

@font-face {
  font-family: 'Poppins-bold';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('~assets/font/Poppins-Bold.ttf') format('truetype');
}

@font-face {
  font-family: 'Poppins-regular';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('~assets/font/Poppins-Regular.ttf') format('truetype');
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

:root {
  --orange: #E34B1B;
  --orange-light: rgb(255, 237, 230);
  --black: #202020; 
  --gray: #F7F7F7; 
  --hint: #AAAAAA;
}

h1, h2, h3, h4, h5 {
  font-family: Pontiac, sans-serif; 
  color: var(--black);
  text-transform: uppercase;
}


</style>
