<template>
  <button
    :class="classList"
    :style="buttonStyle"
    @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'v-button',
    props: {
      buttonStyle: {
        type: Object,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      size: {
        type: String,
        default: 'normal',
      },
      type: {
        type: String,
        default: 'default',
      },
    },

    computed: {
      classList() {
        const list = ['btn', `btn--${this.size}`, `btn--${this.type}`]
        if (this.disabled) {
          list.push('btn--disabled')
        }
        return list
      },
    },
    methods: {
      onClick() {
        if (!this.disabled) {
          this.$emit('onButtonClick')
        }
      },
    },
  }
</script>
