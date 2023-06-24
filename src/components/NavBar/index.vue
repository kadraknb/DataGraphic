<script>
import DarkMode from '../Buttons/DarkMode';
import User from '../Buttons/User';
import Default from '../Buttons/Default';
import database from '../../images/database-solid.svg';
import tableCells from '../../images/table-cells-large-solid.svg';
import expandSolid from '../../images/expand-solid.svg';

export default {
  name: 'NavBar',
  components: {
    DarkMode,
    Default,
    User,

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
    <div></div>
    <div class="">
      <img class="logo-navBar" src="../../images/Logo.png" alt="Logo" />
    </div>
    <div class="buttons-NavBar">
      <DarkMode />
      <!-- ajust add nome icon -->
      <Default :icon="database" />
      <Default :icon="tableCells" />
      <Default :icon="expandSolid" />
      <User />
    </div>
  </nav>
</template>

<style scoped>
.buttons-NavBar {
  border: solid red;
  width: 300px;
  padding-top: 5px;
  margin-left: -311px;
  display: flex;
  flex-direction: row;
}

.custom-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 67px;
}

.logo-navBar {
  width: 62px;
}
</style>
