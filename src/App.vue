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
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  computed: {
    ajusteTelaWidth() {
      const width =
        this.windowWidth > 950 && this.windowWidth < 1700
          ? `${(this.windowWidth < 1024 ? 100 : 87) - (1700 - this.windowWidth) / 75}%`
          : null;
      return { width };
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>

<template>
  <div id="app">
    <NavBar />
    <div class="custom-container">
      <div id="AsideLeft">
        <AsideLeft />
      </div>
      <div :style="ajusteTelaWidth" id="ArticleH">
        <ArticleH />
      </div>
    </div>
    <FooterH id="FooterH" />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

#app {
  font-family: Nunito, sans-serif;
  color: #707070;
  background-color: #f8f8f8;
}


.shadow-default {
  box-shadow: 0 0px 8px rgba(0, 0, 0, 0.1);
}

.custom-container {
  display: flex;
}

#ChartsCircleDonut {
  height: 100px;
}

#ArticleH {
  width: 87.26%;
  height: 70%;
  padding-bottom: 50px;
}

#FooterH {
  width: 89vw;
  position: fixed;
  bottom: 0% !important;
  left: 12.5rem;
}

@media (max-width: 1024px) {
  #FooterH {
    left: 2.5rem;
    width: 97vw;
  }
}

@media (max-width: 600px) {
  #AsideLeft,
  #FooterH {
    display: none !important;
  }
}</style>
