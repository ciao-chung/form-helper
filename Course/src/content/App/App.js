import storage from 'ext/storage.js'
class App {
  constructor(notify) {
    this.notify = notify
    this.init()
  }

  init() {
    const isAtApplyPage = new RegExp('showregist.php', 'g').test(window.location.href)
    if(!isAtApplyPage) {
      this.notify('請先前往報名內頁')
      return
    }

    console.warn()
    this.start()
  }

  start() {
    chrome.storage.sync.get('form_helper_course', (data) => {
      if(!data.form_helper_course) return
      console.warn('start...', data.form_helper_course)
    })
  }
}

export default (notify) => new App(notify)