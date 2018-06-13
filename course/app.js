class App {
  constructor() {
    this.init()
  }

  async init() {
    try {
      await Notification.requestPermission()
    } catch(error) {
      alert('請先允許本網頁的通知(Chrome設定>內容設定>通知), 才能正常收到擴充套件的訊息')
    }

    this.isAtApplyPage = new RegExp('showregist.php', 'g').test(window.location.href)

    if(!$('iframe#beclassmainframe')) return
    if(!new RegExp(/rid/).test(window.location.href)) return
    if(!this.isAtApplyPage) {
      const applyPageUrl = `${window.location.origin}/${$('iframe#beclassmainframe').attr('src')}`
      window.location.assign(applyPageUrl)
      return
    }

    this.localStorage = window.localStoragePlugin
    this.start()
  }

  start() {
    console.warn(this.localStorage.all())
  }

  notify(title, body = '', delay = 5000) {
    const notification = new Notification(title, {
      body: body,
      icon: 'https://goo.gl/Ft55Hd',
    })

    setTimeout(() => notification.close(), delay)
  }
}

new App()

chrome.runtime.onMessage.addListener(request =>{
  if(!request) return
  if(!request.formHelper) return
  if(request.formHelper.type != 'course') return
  const action = request.formHelper.action
  console.log(action)
})