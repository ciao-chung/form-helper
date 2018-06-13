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

    this.localStorage = new localStorage()
    this.start()
  }

  start() {
    console.warn(this.localStorage.all())
  }
}