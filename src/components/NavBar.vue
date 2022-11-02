<template>
  <v-app-bar :elevation="2">
    <v-app-bar-title>Weide Plan</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn v-if="securityStore.isAuthenticated" border @click="logOut">Logout</v-btn>
    <v-btn v-else border @click="$router.push('./login')">Log in</v-btn>

  </v-app-bar>
</template>

<script setup lang="ts">
import router from '../router'
import { useSecurityStore } from '../stores/SecurityStore';

const securityStore = useSecurityStore();

async function logOut(): Promise<void> {
  securityStore.$reset();

  await router.push('./login')
}

</script>