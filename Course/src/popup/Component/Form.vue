<template>
  <div class="form collapse" data-role="popup-form">
    <h3>資料設定</h3>

    <div class="form-group">
      <button class="btn btn-info" @click="saveToStorage()">
        <i class="fa fa-save"></i>
        <span>儲存資料</span>
      </button>
    </div>

    <div class="form-group" v-for="item in config_list">
      <label>{{item.label}}</label>
      <input type="text" class="form-control"
         :placeholder="item.placeholder"
         v-model="config[item.name]">
    </div>
  </div>
</template>

<script>
import config from 'static/config.js'
export default {
  data() {
    return {
      config: {
        apply_at: '',
        name: '',
        sex: '',
        personId: '',
        birth_year: '',
        birth_month: '',
        birth_day: '',
        phone_area: '',
        phone_body: '',
        phone_ext: '',
        mobile: '',
        email: '',
        courses: '',
      },
      config_list: [
        {
          name: 'apply_at',
          label: '報名時間',
          placeholder: '請輸入正確格式(例如: 2018-06-14 00:00:00)',
        },
        {
          name: 'sex',
          label: '性別',
          placeholder: '"男"或"女", 多填其他字或空格將會造成錯誤',
        },
        {
          name: 'name',
          label: '姓名',
          placeholder: '',
        },
        {
          name: 'personId',
          label: '身份證',
          placeholder: '',
        },
        {
          name: 'birth_year',
          label: '生日(年)',
          placeholder: '請填西元年(民國年加1991)',
        },
        {
          name: 'birth_month',
          label: '生日(月)',
          placeholder: '',
        },
        {
          name: 'birth_day',
          label: '生日(日)',
          placeholder: '',
        },
        {
          name: 'phone_area',
          label: '市話(區碼)',
          placeholder: '',
        },
        {
          name: 'phone_body',
          label: '市話(主要)',
          placeholder: '',
        },
        {
          name: 'phone_ext',
          label: '市話(分機)',
          placeholder: '',
        },
        {
          name: 'mobile',
          label: '手機',
          placeholder: '',
        },
        {
          name: 'email',
          label: 'Email',
          placeholder: '',
        },
        {
          name: 'course',
          label: '課程代碼',
          placeholder: '可多選, 請以逗號區隔(例如: B12,B13)',
        },
      ]
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      chrome.storage.sync.get('form_helper_course', (data) => {
        if(!data.form_helper_course) return
        this.config = data.form_helper_course
      })
    },
    saveToStorage() {
      chrome.storage.sync.set({
        form_helper_course: this.config
      })
      this.notify('儲存成功')
    },
    notify(title = '', delay = 5000) {
      const notification = new Notification(title, {
        icon: 'https://goo.gl/Ft55Hd',
      })

      setTimeout(() => notification.close(), delay)
    }
  },
}
</script>

<style lang="sass" scoped>
div.form
  padding: 20px 0
</style>