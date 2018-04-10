<template>
    <transition name="slide">
        <div class="page">
            <div class="page__hd">
                <h1 class="page__title">Switch</h1>
            </div>
            <div class="page__bd">
                <v-switch title="开关" v-model="isSwitched"/>
            </div>
        </div>
    </transition>
</template>

<script>

export default {
  name: 'button-example',
  data() {
    return {
      isSwitched: true,
    }
  },
  watch: {
    isSwitched(newVal) {
      console.log(newVal)
    },
  },
}
</script>

<style lang="scss">
    @import "../assets/example";
</style>
