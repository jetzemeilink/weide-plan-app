<template>
    <v-container fill-height class="background--photo d-flex "> 
<v-row align="center" justify=center>
  <v-col cols="6">
    <v-card  class="justify-self-center">
    <v-card-title>
      Log In
    </v-card-title>
    <v-form ref="form">
    <v-card-text>
      <v-row>
        <v-col
          cols="10"
        >
        <v-text-field
            v-model="email"
            :rules="rules.email"
            label="E-mail"
          ></v-text-field>
          <v-text-field
            v-model="password"
            type="password"
            :rules="rules.password"
            :counter="10"
            label="Password"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn
      color="success"
      class="mr-4"
      @click="submit"
    >
      Log In
    </v-btn>
    <v-btn @click="getAddress">Get address</v-btn>
    </v-card-actions>
  </v-form>
  </v-card>
  </v-col>
</v-row>
</v-container>
   
</template>

<script setup lang="ts">
import { Ref, ref } from '@vue/reactivity'
import { required, emailRule, passwordRule} from "../helpers/validationRules"
import router from '../router'
import { AddressService, LoginService } from '../services'
import {useSecurityStore} from "../stores/SecurityStore";

  let email: Ref<string> = ref('');
  let password: Ref<string> = ref('');
  const rules = {
  email: [required, emailRule], 
  password: [required, passwordRule]
  }
  const securityStore = useSecurityStore();
  const loginService = new LoginService();
  const addressService = new AddressService();

  async function submit(): Promise<void> {
    try {
      const result = await loginService.login(email.value, password.value);

      securityStore.setSecurity(result.token);

      router.push('./dashboard')
    } catch (error){
      console.log(error)
      throw new Error('Login authentication failed, please try again');
    } 
}

  async function getAddress(): Promise<void> {
    const result = await addressService.getAddress();
    console.log(result);
  }
</script>
<style scoped>

.background--photo {
  background-image: url('../../public/achtergrond.jpg');
  background-size: cover;
}
</style>