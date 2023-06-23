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
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white custom-navbar">
    <div class="navbar-brand d-flex align-items-center justify-content-center flex-grow-1">
      <img src="" alt="Logo" />
    </div>
    <div class="navbar-collapse justify-content-end">
      <ul class="navbar-nav">
        <li class="nav-item">
          <ButtonDarkMode />
        </li>
        <li class="nav-item">
          <ButtonDefault />
        </li>
        <li class="nav-item">
          <ButtonUser />
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.custom-navbar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 84px;
}
</style>
