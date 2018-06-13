<template>
  <div popup>
    <div class="container">
      <div class="row">
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
      </div>
    </div>
  </div>
</template>

<script>
import bootstrap from 'bootstrap/dist/js/bootstrap.min.js'
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
  },
}
</script>

<style src="bootstrap/dist/css/bootstrap.min.css"></style>
<style src="font-awesome/css/font-awesome.min.css"></style>
<style lang="sass" scoped>
div[popup]
  width: 600px
  height: 800px
  padding: 30px
</style>