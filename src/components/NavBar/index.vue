<script>
import DarkModeIcon from '../Buttons/DarkMode';
import UserIcon from '../Buttons/User';
import DefaultIcon from '../Buttons/Default';
import database from '../../images/database-solid.svg';
import tableCells from '../../images/table-cells-large-solid.svg';
import expandSolid from '../../images/expand-solid.svg';

export default {
  name: 'NavBar',
  components: {
    DarkModeIcon,
    DefaultIcon,
    UserIcon,
  },
  data() {
    return {
      database,
      tableCells,
      expandSolid,
    };
  }
};
</script>

<template>
  <nav class="navbar-light bg-white custom-navbar shadow-default">
    <div id="div-oculta"></div>
    <div class="">
      <img class="logo-navBar" src="../../images/Logo.png" alt="Logo" />
    </div>
    <div class="buttons-NavBar">
      <DarkModeIcon />
      <DefaultIcon :icon="database" />
      <DefaultIcon :icon="tableCells" />
      <DefaultIcon :icon="expandSolid" />
      <UserIcon />
    </div>
  </nav>
</template>

<style scoped>
.buttons-NavBar {
  width: 300px;
  padding-top: 5px;
  margin-left: -311px;
  display: flex;
  flex-direction: row;
}

.custom-navbar {
  margin-bottom: 1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 67px;
}

.logo-navBar {
  width: 62px;
}
@media (max-width: 700px) {
  #div-oculta {
   display: none;
  }
}
</style>
