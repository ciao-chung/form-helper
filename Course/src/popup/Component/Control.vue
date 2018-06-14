<template>
  <div>
    <div class="form-group">
      <span v-if="current" :on-countdown="onCountdown">
        目前GMT時間: {{current}}
        <span v-if="onCountdown">(倒數中)</span>
      </span>
    </div>
    <div class="form-group">
      <button class="btn btn-default" @click="emit('navigate')">
        <i class="fa fa-location-arrow"></i>
        <span>前往報名內頁</span>
      </button>

      <button class="btn"
        @click="countdown"
        :disabled="onCountdown"
        :class="{ 'btn-default': !onCountdown, 'btn-warning': onCountdown }">
        <i v-if="!onCountdown" class="fa fa-clock-o"></i>
        <i v-if="onCountdown" class="fa fa-spinner fa-spin"></i>
        <span>開始倒數</span>
      </button>

      <button class="btn btn-default" @click="emit('start')">
        <i class="fa fa-flash"></i>
        <span>直接報名(可當測試用)</span>
      </button>
    </div>

    <div class="form-group">
      <button class="btn btn-danger" @click="removeCountDown">
        <i class="fa fa-power-off"></i>
        <span>停止</span>
      </button>

      <button class="btn btn-info" data-toggle="collapse" data-target="div[data-role='popup-form']" @click="$emit('toggleForm')">
        <i v-if="!formOpen" class="fa fa-chevron-down"></i>
        <i v-if="formOpen" class="fa fa-chevron-up"></i>
        <span>設定資料</span>
      </button>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    formOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      config: null,
      countdownInterval: null,
      current: null,
      onCountdown: false,
      waitForReload: 3000,
    }
  },
  created() {
    setInterval(() => this.current = this.getCurrent(), 500)
  },
  methods: {
    countdown() {
      chrome.storage.sync.get('form_helper_course', (data) => this.startCountDown(data))
    },
    startCountDown(data) {
      // 沒資料
      if(!data.form_helper_course) return
      this.config = data.form_helper_course

      if(!this.config) {
        this.$notify('請先填寫資料')
        return
      }
      
      this.onCountdown = true

      const apply_at = new Date(this.config.apply_at).getTime()
      this.countdownInterval = null

      // polling
      this.countdownInterval = setInterval(() => {
        const now = new Date().getTime()
        const wait = now < apply_at ? (apply_at - now - this.waitForReload) : 0

        // 時間到
        if(now >= apply_at || wait == 0) {
          this.removeCountDown()
          this.$notify('時間到, 開始報名!')
          this.$nextTick(() => this.emit('start'))
        }
      }, 500)
    },
    removeCountDown() {
      this.onCountdown = false
      clearInterval(this.countdownInterval)
    },
    getCurrent() {
      return moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
    },
    emit(action) {
      if(action == 'start') {
        this.triggerEvent('reload')
        setTimeout(() => this.triggerEvent('start'), this.waitForReload)
        return
      }

      this.$nextTick(() => this.triggerEvent(action))
    },
    triggerEvent(action) {
      chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
          formHelper: {
            type: 'course',
            action: action,
          },
        })
      })
    }
  },
}
</script>

<style lang="sass" scoped>
span[on-countdown]
  color: orange
</style>