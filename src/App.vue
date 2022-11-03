<template>
  <v-app>
    <v-main class="container">  
      <NavBar></NavBar>
  
  <router-view></router-view>
  <
</v-main>

  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './components/NavBar.vue';
import { LoginService } from './services'

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
  }
})
</script>

<style scoped>
 @import './style.css';
 </style>