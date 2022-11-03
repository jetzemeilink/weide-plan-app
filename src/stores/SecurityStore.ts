import { defineStore } from "pinia";
import { User } from "../types/interface/view"
import jwt_decode from "jwt-decode"

export const useSecurityStore = defineStore('security', {
    state: () => ({
      security: {
        user: {} as User,
        jwtToken: '',
        isUserAuthenticated: false
      }
    }),
    actions: {
      setSecurity(token: string): void {

        const user: User = jwt_decode(token);

        this.security.user.email = user.email;
        this.security.user.roles = user.roles;
        this.security.jwtToken = token;
        this.security.isUserAuthenticated = true;
      }
    },
    getters: {
      user: (state): User => {
        return state.security.user
      },
      userJwtToken: (state): string => {
        return state.security.jwtToken;
      },
      isAuthenticated: (state): boolean => {
        return state.security.isUserAuthenticated;
      }
    }
})