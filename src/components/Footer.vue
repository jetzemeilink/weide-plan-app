<template >
  <div class="footer__container">
    <div>
      <h2 class="font-bold ">Contact:</h2>
    <p>Email: jetzemeilink@gmail.com</p>
    <a class="underline" href="https://github.com/jetzemeilink" target="_blank">Github</a>
    </div>
    <div>
      <p>&copy; Jetze Meilink {{currentYear}}</p>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}

</script>
<style>
.footer__container {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 5rem;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #42929D;
  color: #FEFFF6;
}
</style>