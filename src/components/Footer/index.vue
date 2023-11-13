<script>

export default {
  name: 'Footer',
};
</script>

<template>
  <div class="contêiner-Footer">
    <span>
      <p>
        2023 DataGraphic - Feito com
        <img class="icon-Footer" src="../../images/heart-solid.svg" alt="icon" />
        e muito
        <img class="icon-Footer" src="../../images/mug-saucer-solid.svg" alt="icon" />
        
      </p>

    </span>
    <span>
      <p>
        <img class="icon-Footer" src="../../images/building-solid.svg" alt="icon" />
        Empresa Usinagem
      </p>
    </span>
  </div>
</template>

<style scoped>
.contêiner-Footer {
  border: solid 1px rgb(212, 212, 212);
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: space-between;
  height: 41px;
}

.contêiner-Footer p {
  margin: 0.6rem 2.3rem 0rem 0.7rem;
  font-size: 0.67rem;
}

.icon-Footer {
  width: 15px;
  height: auto;
}
@media (max-width: 1024px) {
  .contêiner-Footer p {
    margin-right: 4rem;
  }
}

</style>
