
import { shallowMount } from "@vue/test-utils"
import { createPinia, setActivePinia } from "pinia"
import { beforeEach, describe, expect, it} from "vitest";
import Login  from "../components/Login.vue";

describe('Login', () => {

  beforeEach(() => {
    setActivePinia(createPinia());
  })

  it('Should throw an error when submitted with invalid arguments', () => {
    const wrapper = shallowMount(Login);

    // todo remove test and start testing the Login component
    expect(wrapper.vm.testMe('test')).toBe('hello test');
  })
});
