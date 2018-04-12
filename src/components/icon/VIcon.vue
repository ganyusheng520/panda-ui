<template>
  <i
    class="iconfont icon--primary"
    :class="getClassName"
    @click="handleClick"
  >
  </i>
</template>
<script>
  export default {
    name: 'v-icon',
    props: {
      size: {
        type: Number,
        default: 12
      },
      className: {
        type: [String, Array]
      },
      disabled: {
        type: Boolean,
        default: false
      },
      active: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      getClassName() {
        const classList = []
        if (this.disabled) {
          classList.push('icon--disabled')
        }
        if (this.active) {
          classList.push('btn--active')
        }
        return classList.concat([`fz${this.size}`]).concat(this.className)
      }
    },

    methods: {
      handleClick() {
        if (!this.disable) {
          this.$emit('onIconClick')
        }
      }
    }

  }
</script>

