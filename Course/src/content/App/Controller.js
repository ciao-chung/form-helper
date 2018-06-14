import App from 'content/App/App.js'
import config from 'static/config.js'
class Controller {
  constructor() {
    this._init()
  }

  notify(body = '', delay = 8000) {
    const notification = new Notification(body, {
      icon: 'https://goo.gl/Ft55Hd',
    })

    setTimeout(() => notification.close(), delay)
  }

  async _init() {
    try {
      await Notification.requestPermission()
    } catch(error) {
      alert('請先允許本網頁的通知(Chrome設定>內容設定>通知), 才能正常收到擴充套件的訊息')
    }

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
  }

  reload() {
    window.location.reload()
  }
}

new Controller()