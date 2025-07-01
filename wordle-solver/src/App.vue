<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <WordleSolve />
  <Footer />
</template>

<script>
import WordleSolve from './components/WordleSolve.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    WordleSolve,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 10px;
}
</style>