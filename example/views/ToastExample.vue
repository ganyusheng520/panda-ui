<template>
  <transition name="slide">
    <div class="page">
      <div class="page__hd">
        <h1 class="page__title">Toast</h1>
      </div>
      <div class="page__bd">
        <v-button-box>
          <v-button
            size="normal"
            type="primary"
            @onButtonClick="showToastTime">Toast</v-button>
        </v-button-box>
      </div>
    </div>
  </transition>
</template>

<script>

  export default {
    methods: {
      showToastTime() {
        console.log(this)
        this.toast = this.$createToast({
          time: 1000,
          txt: 'Toast time 1s',
          onHide: () => {
            console.log('hide')
          }
        })
        this.toast.show()
      },
      showToastTime0() {
        this.toast = this.$createToast({
          time: 0,
          txt: 'Toast time 0'
        })
        this.toast.show()
        setTimeout(() => {
          this.toast.hide()
        }, 2000)
      },
      showToastMask() {
        this.toast = this.$createToast({
          txt: 'Loading...',
          mask: true
        })
        this.toast.show()
      },
      showToastType() {
        this.toast = this.$createToast({
          txt: 'Correct',
          type: 'correct'
        })
        this.toast.show()
      }
    },
    components: {
    }
  }
</script>

<style lang="scss">
  @import "../assets/example";
</style>