<template>
  <div class="nav__container">
  <img  src="../../public/tent.png" alt="tent">
   <div>
    <router-link to="about">About us</router-link>
    <router-link to="/login" class="btn btn-primary">Log in</router-link>
   </div>
  </div>
</template>

<style scoped>
.nav__container {
  width: 100vw;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav__container * {
  margin: 5px;
}

img {
  display: block;
  max-width:230px;
  max-height:95px;
  width: auto;
  height: auto;
}
</style>