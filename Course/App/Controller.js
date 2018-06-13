class Controller {
  constructor() {
    this.init()
  }

  notify(title, body = '', delay = 5000) {
    const notification = new Notification(title, {
      body: body,
      icon: 'https://goo.gl/Ft55Hd',
    })

    setTimeout(() => notification.close(), delay)
  }

  init() {
    delete this.app

    chrome.runtime.onMessage.addListener(request =>{
      if(!request) return
      if(!request.formHelper) return
      if(request.formHelper.type != 'course') return
      const action = request.formHelper.action

      switch (action) {
        case 'start':
          this.app = new App(this.notify)
          this.notify('啟動成功')
          break
        default:
          delete this.app
          this.notify('停止')
          window.location.reload()
      }
    })
  }
}

new Controller()