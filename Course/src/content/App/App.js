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

    chrome.storage.sync.get('form_helper_course', (data) => {
      if(!data.form_helper_course) return

      this.start(data.form_helper_course)

    })
  }

  start() {
    console.warn('start...')
  }
}

export default (notify) => new App(notify)