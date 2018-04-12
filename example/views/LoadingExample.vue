<template>
    <transition name="slide">
        <div class="page">
            <div class="page__hd">
                <h1 class="page__title">Loading</h1>
            </div>
            <div class="page__bd">
                <v-loading :size="14"></v-loading>
                <v-loading :size="20"></v-loading>
                <v-loading :size="24"></v-loading>
            </div>
        </div>
    </transition>
</template>

<script>

export default {
  name: 'loading-example',
  data() {
    return {}
  },
  methods: {
  }
}
</script>

<style lang="scss">
    @import "../assets/example";
</style>
