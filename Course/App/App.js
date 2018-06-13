class App {
  constructor(notify) {
    this.notify = notify
    this.init()
  }

  async init() {
    try {
      await Notification.requestPermission()
    } catch(error) {
      alert('請先允許本網頁的通知(Chrome設定>內容設定>通知), 才能正常收到擴充套件的訊息')
    }

    const isInMainPage = !!$('iframe#beclassmainframe') && new RegExp(/rid/).test(window.location.href)
    if(isInMainPage) {
      const applyPageUrl = `${window.location.origin}/${$('iframe#beclassmainframe').attr('src')}`
      window.location.assign(applyPageUrl)
      return
    }

    const isAtApplyPage = new RegExp('showregist.php', 'g').test(window.location.href)
    if(!isAtApplyPage) return
    this.localStorage = new localStorage()
    this.start()
  }

  start() {
    console.warn(this.localStorage.all())
  }
}