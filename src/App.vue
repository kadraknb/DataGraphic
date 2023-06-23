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
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3 pl-0">
          <AsideLeft />
        </div>
        <div class="col-lg-9">
          <ArticleH />
        </div>
      </div>
    </div>
    <FooterH />
  </div>
</template>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  background-color: #f8f8f8;
  /* width: ; */
}
* {
 outline: 1px solid rgba(255, 0, 0, 0.171);
}
</style>
