<template>
  <div class="container">
    <p class="text-lg font-bold">Login</p>
    <div class="form-control">
      <label class="input-group p-2 ">
        <span>Email</span>
        <input type="text" class="input input-md input-bordered" />
      </label>
      <label class="input-group p-2">
        <span>Password</span>
        <input type="password" class="input input-md input-bordered" />
      </label>
      <button class="btn btn-primary m-4">Log in</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  
}
</script>
<style>
.container {
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>