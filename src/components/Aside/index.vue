<script>
import SectionAside from './Section';
import ButtonToHide from './ButtonToHide';

export default {
  name: 'AsideLeft',
  components: {
    SectionAside,
    ButtonToHide,
  },
  // data() {
  // return {
  //   msg: 'Welcome to Your Vue.js App',
  // };
  // },
};
</script>

<template>
  <aside class="d-flex flex-column p-3 bg-white custom-aside">
    <SectionAside />
    <SectionAside />
    <SectionAside />
    <ButtonToHide class="mt-auto" />
  </aside>
</template>


<style scoped>
aside {
  width: 15.6rem !important;
  height: 1000px;
}
</style>
