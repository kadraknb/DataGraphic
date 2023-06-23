<script>
import NavBar from './components/NavBar';
import FooterH from './components/Footer';
import AsideLeft from './components/Aside';
import ArticleH from './components/Article';

export default {
  name: 'App',
  components: {
    NavBar,
    AsideLeft,
    ArticleH,
    FooterH,
  },
};
</script>

<template>
  <div id="app">
    <NavBar />
    <AsideLeft />
    <ArticleH />
    <FooterH />
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
