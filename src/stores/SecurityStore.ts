import { defineStore } from "pinia";
import { UserView } from "../types/interface/view/UserView"
import jwt_decode from "jwt-decode"

export const useSecurityStore = defineStore('security', {
    state: () => ({
      security: {
        user: {} as UserView,
        jwtToken: '',
        isUserAuthenticated: false
      }
    }),
    actions: {
      setSecurity(token: string): void {

        const user: UserView = jwt_decode(token);

        this.security.user.email = user.email;
        this.security.user.roles = user.roles;
        this.security.jwtToken = token;
        this.security.isUserAuthenticated = true;
      }
    },
    getters: {
      user: (state): UserView => {
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