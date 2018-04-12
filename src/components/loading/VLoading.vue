<template>
    <div class="loading">
    <span class="loading-spinners" :style="loadingStyle">
      <i class="loading__spinner" v-for="_ in spinnerList"></i>
    </span>
    </div>
</template>
<script>
export default {
  name: 'v-loading',
  data() {
    return {
      spinnerList: 12
    }
  },
  props: {
    size: {
      type: [Number, String],
      default: 14
    }
  },
  computed: {
    loadingStyle() {
      if (!this.size) {
        return null
      }
      const value = `${this.size}px`
      return {
        width: value,
        height: value
      }
    }
  }
}
</script>
