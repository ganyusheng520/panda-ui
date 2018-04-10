<template>
  <div class="cell cell--switch">
    <div class="cell__hd">{{title | limit(wordLimit)}}</div>
    <div class="cell__ft">
      <input
          class="switch"
          type="checkbox"
          v-model="currentValue"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-switch',
  props: {
    title: {
      type: [String],
      default: '',
    },
    value: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
    },
    wordLimit: {
      type: Number,
      default: 20,
    },
  },

  filters: {
    limit(value, maxCount = 10) {
      if (!value) {
        return ''
      }
      return value.length > maxCount ? `${value.substring(0, maxCount)}...` : value
    },
  },

  computed: {
    currentValue: {
      get() {
        return this.value
      },
      set(newValue) {
        if (this.isDisabled) {
          this.$emit('onDisabled')
        } else {
          this.$emit('input', newValue)
        }
      },
    },
  },
}
</script>

