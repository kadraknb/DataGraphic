<script>
export default {
  name: 'SectionAside',
  props: ['icon', 'text'],
};
</script>

<template>
  <div class="coston-SectionAside">
    <div class="box-icon ">

      <img class="icon-SectionAside" :src="icon" alt="icon" />
    </div>
    <p>{{ text }}</p>
  </div>
</template>

<style scoped>
.coston-SectionAside {
  padding-left: .5rem;
  display: flex;
  /* justify-content: center; */
  align-items: center;
}

.coston-SectionAside p {
  font-size: small;
  padding-left: .5rem;
  margin-top: 2px;
  padding-top: 4px;
}

.box-icon {
  background-color: #0d84ae;
  padding: 0 5px;
  width: 23px;
  height: 25px;
  border-radius: 3px;
}

.icon-SectionAside {
  width: 13px;
  height: auto;
}
@media (max-width: 1024px) {
  .coston-SectionAside p {
    display: none;
  }
  .box-icon {
    margin-top: 20px;
  }
}
</style>
