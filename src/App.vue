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
        <div id="AsideLeft" class=" pl-lg-0">
          <AsideLeft />
        </div>
        <div id="ArticleH" class=" pr-0">
          <ArticleH />
        </div>
      </div>
    </div>
    <FooterH />
  </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');


#ArticleH {
  width: 87.26%;
}
#app {
  font-family: Nunito, sans-serif;
  color: #707070;

  background-color: #f8f8f8;

}
.shadow-default {
  box-shadow: 0 0px 8px rgba(0, 0, 0, 0.1);
}
#ChartsCircleDonut {
  height: 100px;
}
* {
 /* outline: 1px solid rgba(255, 0, 0, 0.171); */
}
#test2 {
 outline: 1px solid rgb(55, 0, 255);
 display: flex;
 flex-wrap: wrap;
 justify-content: flex-start;
 align-items: flex-start;
}

</style>
