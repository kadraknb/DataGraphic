<script>
export default {
  name: 'User',
  data() {
    return {
      user: { name: 'Allan' }
    };
  }
};
</script>

<template>
  <div class="flax row ">
    <p>{{ user.name }}</p>
    <div class="box-icon">
      <img class="icon-User" src="../../../images/user-solid.svg" alt=" iconUser" />
    </div>
  </div>
</template>

<style scoped>
p {
  font-size: x-small;
  height: 13px;
  padding-top: 6px;
  padding-left: 0.8rem;
  padding-right: 0.7rem;
}
img {
}
.box-icon {
  border-radius: 50%;
  background-color: rgb(223, 223, 223);
  width: 35px;
  height: 35px;
}
.icon-User {
  margin-top: 5px;
  margin-left: 5px;
  width: 25px;
  height: 25px;
}
</style>