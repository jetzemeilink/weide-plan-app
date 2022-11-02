import { App, Component } from "vue"

interface SnackbarOptions {
 time: number;
}

export default {
  install: (app: App, options: SnackbarOptions) => {
    app.config.globalProperties.$dangerSnackbar = (msg: string) => {

    }
  }
}