<template>
  <div class="form">
    <div class="form-group" v-for="item in config_list">
      <label>{{item.label}}</label>
      <input type="text" class="form-control"
         :placeholder="item.placeholder"
         v-model="config[item.name]">
    </div>
  </div>
</template>

<script>
import storage from 'ext/storage.js'
export default {
  data() {
    return {
      config: {
        apply_at: '',
        name: '',
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

    },
  },
  computed: {
    storage() {
      return storage
    }
  },
}
</script>

<style lang="sass" scoped>
div.form
  padding: 20px 0
</style>