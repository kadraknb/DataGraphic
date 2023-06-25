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
  <aside class="custom-aside ">
    <SectionAside text="Dashboard" :icon="iconBock" />
    <SectionAside text="Clientes potenciais" :icon="iconUserPlus" />
    <SectionAside text="Negócios" :icon="iconBriefcase" />
    <ButtonToHide class="" />
  </aside>
</template>

<style scoped>

aside {
  background-color: white;
  width: 12.5rem;
  height: 100%;
}
@media (max-width: 1024px) {
  aside {
    width: 2.5rem;
  }
}
</style>
