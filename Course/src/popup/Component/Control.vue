<template>
  <div>
    <button class="btn btn-success" @click="emit('navigate')">
      <i class="fa fa-location-arrow"></i>
      <span>前往報名內頁</span>
    </button>

    <button class="btn btn-success" @click="emit('start')">
      <i class="fa fa-power-off"></i>
      <span>啟動</span>
    </button>

    <button class="btn btn-danger" @click="emit('stop')">
      <i class="fa fa-power-off"></i>
      <span>停止</span>
    </button>

    <button class="btn btn-info" @click="save()">
      <i class="fa fa-save"></i>
      <span>儲存資料</span>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    emit(action) {
      chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
          formHelper: {
            type: 'course',
            action: action,
          },
        })
      })
    },
    save() {
      this.$root.$emit('saveConfig')
    },
  },
}
</script>

<style lang="sass" scoped></style>