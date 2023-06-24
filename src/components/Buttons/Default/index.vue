<script>
export default {
  name: 'Default',
  props: ['icon'],
};
</script>

<template>
  <div class="contêiner-Default">
    <img class="icon-Default" :src="icon" alt="icon" />
  </div>
</template>

<style scoped>
.contêiner-Default {
  padding: 0 1rem;
}
.icon-Default {
  width: 16px;
  height: 16px;
}
</style>
