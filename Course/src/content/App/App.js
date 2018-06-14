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

  start(config) {
    console.warn('start...', config)

    $('input').removeAttr('disabled')
    $('select').removeAttr('disabled')
    $('#myclasses input[type="checkbox"]').prop('checked', true)
    $('#username').val(config.name)
    $('#person_id').val(config.personId)
    $('#bornyear').val(config.birth_year)
    $('#bornmonth').val(config.birth_month)
    $('#bornday').val(config.birth_day)
    $('#mobile').val(config.mobile)
    $('#phone_area').val(config.phone_area)
    $('#phone_body').val(config.phone_body)
    $('#phon_ext').val(config.phone_ext)
    $('#email').val(config.email)
    $('input[name="sex"][value="女"]').prop('checked', true)

    for(const course of config.course.split(',')) {
      $(`input[name*="tb_extra_0"][value*="${course}"]`).prop('checked', true)
    }

    $("html, body").animate({ scrollTop: $(document).height() }, 500)
  }
}

export default (notify) => new App(notify)