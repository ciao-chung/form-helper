<template>
  <div popup :form-open="formOpen">
    <div class="container">
      <PopupControl
        :formOpen="formOpen"
        @toggleForm="toggleForm" />
      <PopupForm/>
    </div>
  </div>
</template>

<script>
import bootstrap from 'bootstrap/dist/js/bootstrap.min.js'
import PopupControl from 'popup/Component/Control.vue'
import PopupForm from 'popup/Component/Form.vue'
export default {
  data() {
    return {
      formOpen: false,
    }
  },
  methods: {
    toggleForm() {
      this.formOpen = !this.formOpen
    }
  },
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
  height: 150px
  padding: 30px
  &[form-open]
    height: 800px
</style>