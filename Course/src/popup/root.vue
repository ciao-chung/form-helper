<template>
  <div popup>
    <div class="container">
      <PopupControl/>
      <PopupForm/>
    </div>
  </div>
</template>

<script>
import bootstrap from 'bootstrap/dist/js/bootstrap.min.js'
import PopupControl from 'popup/Component/Control.vue'
import PopupForm from 'popup/Component/Form.vue'
export default {
  components: {
    PopupControl,
    PopupForm,
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