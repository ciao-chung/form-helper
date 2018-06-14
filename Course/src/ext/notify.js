import Vue from 'vue'

class Installer {
  constructor() {
    this.isInstalled = false
  }
  install(Vue, options) {
    if(this.isInstalled) return

    this.isInstalled = true
    Vue.prototype.$notify = (options) => {

    }
  }

  notify(title = 'foo title', body = '', delay = 5000) {
    const notification = new Notification(title, {
      body,
      icon: 'https://goo.gl/Ft55Hd',
    })

    setTimeout(() => notification.close(), delay)
  }
}

export default new Installer()