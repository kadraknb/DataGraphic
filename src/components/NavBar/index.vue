<script>
import ButtonDarkMode from '../ButtonDarkMode';
import ButtonUser from '../User/ButtonUser';
import ButtonDefault from '../ButtonDefault';

export default {
  name: 'NavBar',
  components: {
    ButtonDarkMode,
    ButtonDefault,
    ButtonUser,
  },
  // data() {
  // return {
  //   msg: 'Welcome to Your Vue.js App',
  // };
  // },
};
</script>

<template>
  <div>
    <img src='' alt="Logo" />
    <ButtonDarkMode />
    <ButtonDefault />
    <ButtonUser />
  </div>
</template>

<style scoped>

</style>
