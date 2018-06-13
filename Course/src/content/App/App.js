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

    this.localStorage = storage
    console.warn()
    this.start()
  }

  start() {
    console.warn('asdfsadf')
    console.warn(this.localStorage.get('afdsasdf'))
  }
}

export default (notify) => new App(notify)