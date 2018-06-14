import Vue from 'vue'
import config from 'static/config.js'
class Installer {
  constructor() {
    this.isInstalled = false
  }
  install(Vue, options) {
    if(this.isInstalled) return
    this.isInstalled = true

    Vue.prototype.$notify = (options) => {
      this.notify(options)
    }
  }

  notify(body = '', delay = 8000) {
    const notification = new Notification(body, {
      // body,
      icon: 'https://goo.gl/Ft55Hd',
    })

    setTimeout(() => {
      notification.close()
    }, delay)
  }
}

export default new Installer()