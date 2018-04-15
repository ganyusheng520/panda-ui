<template>
  <v-picker
    ref="picker"
    title="Choose Time"
    :data="timeData"
    :selectedIndex="selectedIndex"
    @select="select"
    @cancel="cancel">
  </v-picker>
</template>

<script>
  const COMPONENT_NAME = 'normal-time-picker'
  const EVENT_SELECT = 'select'
  const EVENT_CANCEL = 'cancel'
  function range(n, m, polyfill = false, unit = '') {
    const arr = []
    for (let i = n; i <= m; i++) {
      const value = (polyfill && i < 10 ? `0${i}` : i) + unit
      arr.push({
        text: value,
        value: i
      })
    }
    return arr
  }

  export default {
    name: COMPONENT_NAME,
    props: {
      selectedIndex: {
        type: Array,
        default() {
          return [0, 0, 0]
        }
      }
    },
    data() {
      return {
        timeData: [range(0, 23, true, '点'), range(0, 59, true, '分'), range(0, 59, true, '秒')]
      }
    },
    methods: {
      show() {
        this.$refs.picker.show()
      },
      hide() {
        this.$refs.picker.hide()
      },
      select(selectedVal, selectedIndex, selectedText) {
        this.$emit(EVENT_SELECT, selectedVal, selectedIndex, selectedText)
      },
      cancel() {
        this.$emit(EVENT_CANCEL)
      }
    }
  }
</script>
