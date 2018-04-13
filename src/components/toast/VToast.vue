<template>
    <transition name="panda-toast-fade">
        <v-popup
                type="toast"
                :z-index="zIndex"
                :mask="mask"
                v-show="isVisible">
            <i v-show="!isLoading"
               class="panda-toast-icon"
               :class="iconClass"></i>
            <v-loading v-show="isLoading"></v-loading>
            <div v-show="txt" class="panda-toast-tip">{{txt}}</div>
        </v-popup>
    </transition>
</template>
<script>
import VLoading from '../loading/VLoading'
import VPopup from '../popup/VPopup'
import apiMixin from '../../common/mixins/api'

const COMPONENT_NAME = 'v-toast'
const EVENT_TIMEOUT = 'timeout'

export default {
  components: {
    VPopup,
    VLoading
  },
  name: COMPONENT_NAME,
  mixins: [apiMixin],
  props: {
    type: {
      type: String,
      default: 'loading'
    },
    mask: {
      type: Boolean,
      default: false
    },
    txt: {
      type: String,
      default: ''
    },
    time: {
      type: Number,
      default: 3000
    },
    zIndex: {
      type: Number,
      default: 900
    }
  },
  computed: {
    iconClass() {
      const iconClass = {}
      const classMap = {
        correct: 'panda-ic__right',
        error: 'panda-ic__wrong',
        warn: 'panda-ic__warn'
      }
      const icon = classMap[this.type]
      if (icon) {
        iconClass[icon] = true
      }
      return iconClass
    },
    isLoading() {
      return this.type === 'loading'
    }
  },
  methods: {
    show() {
      this.isVisible = true
      this.clearTimer()
      this.$nextTick(() => {
        if (this.time !== 0) {
          this.timer = setTimeout(() => {
            this.hide()
            this.$emit(EVENT_TIMEOUT)
          }, this.time)
        }
      })
    },
    hide() {
      this.isVisible = false
      this.clearTimer()
    },
    clearTimer() {
      clearTimeout(this.timer)
      this.timer = null
    }
  }
}
</script>
