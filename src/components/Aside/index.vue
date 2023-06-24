<script>
import SectionAside from './Section';
import ButtonToHide from './ButtonToHide';
import iconBock from '../../images/book-solid.svg';
import iconUserPlus from '../../images/user-plus-solid.svg';
import iconBriefcase from '../../images/briefcase-solid.svg';

export default {
  name: 'AsideLeft',
  components: {
    SectionAside,
    ButtonToHide,
  },
  data() {
    return {
      iconBock,
      iconUserPlus,
      iconBriefcase,
    };
  }
};
</script>

<template>
  <aside class="d-flex flex-column bg-white custom-aside mr-md-2">
    <SectionAside text="Dashboard" :icon="iconBock" />
    <SectionAside text="Clientes potenciais" :icon="iconUserPlus" />
    <SectionAside text="Negócios" :icon="iconBriefcase" />
    <ButtonToHide class="mt-auto" />
  </aside>
</template>


<style scoped>
aside {
  width: 12.5rem;
  height: 1000px;
}
</style>
