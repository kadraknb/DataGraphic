<script>
export default {
  name: 'ButtonToHide',
};
</script>

<template>
  <div class="box-BarsSolid button-box-default">
    <img class="icon-BarsSolid" src="../../images/bars-solid.svg" alt="icon iconBarsSolid" />
  </div>
</template>

<style scoped>
.box-BarsSolid {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0d84ae;
  position: fixed;
  bottom: 0% !important;
  left: 0;
  width: 12.5rem;
  height: 41px;
}

.icon-BarsSolid {
  width: 15px;
  height: 10px;
}
@media (max-width: 1024px) {
  .box-BarsSolid {
    width: 2.5rem;
  }
}

</style>
