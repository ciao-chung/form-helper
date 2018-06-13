import App from 'content/App/App.js'
class Controller {
  constructor() {
    this._init()
  }

  notify(body = '', delay = 5000) {
    const notification = new Notification('表單助手', {
      body: body,
      icon: 'https://goo.gl/Ft55Hd',
    })

    setTimeout(() => notification.close(), delay)
  }

  async _init() {
    console.warn(chrome.runtime)
    try {
      await Notification.requestPermission()
    } catch(error) {
      alert('請先允許本網頁的通知(Chrome設定>內容設定>通知), 才能正常收到擴充套件的訊息')
    }

    delete this.app

    chrome.runtime.onMessage.addListener(request =>{
      if(!request) return
      if(!request.formHelper) return
      if(request.formHelper.type != 'course') return
      const action = request.formHelper.action
      this[action]()
    })
  }

  navigate() {
    const applyPageUrl = `${window.location.origin}/${$('iframe#beclassmainframe').attr('src')}`
    const isAtApplyPage = new RegExp('showregist.php', 'g').test(window.location.href)
    if(isAtApplyPage) {
      this.notify('已經在報名內頁了')
      return
    }

    window.location.assign(applyPageUrl)
  }

  start() {
    this.app = App(this.notify)
    this.notify('啟動成功')
  }

  stop() {
    delete this.app
    this.notify('停止')
    window.location.reload()
  }
}

new Controller()