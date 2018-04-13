<template>
    <div class="panda-popup"
         :style="{'z-index': zIndex}"
         :class="typeClass"
         v-show="isVisible">
        <div class="panda-popup-mask"
             v-show="mask"
             @click="maskClick">
            <slot name="mask"></slot>
        </div>
        <div class="panda-popup-container"
             :class="{'panda-popup-center': center}">
            <div class="panda-popup-content" v-if="$slots.default">
                <slot></slot>
            </div>
            <div class="panda-popup-content" v-else v-html="content">
            </div>
        </div>
    </div>
</template>

<script>
import apiMixin from '../../common/mixins/api'

const COMPONENT_NAME = 'v-popup'
const EVENT_MASK_CLICK = 'mask-click'

export default {
  name: COMPONENT_NAME,
  mixins: [apiMixin],
  props: {
    type: {
      type: String,
      default: ''
    },
    mask: {
      type: Boolean,
      default: true
    },
    content: {
      type: String,
      default: ''
    },
    center: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 100
    }
  },
  computed: {
    typeClass() {
      return this.type ? `panda-${this.type}` : ''
    }
  },
  methods: {
    maskClick(e) {
      this.$emit(EVENT_MASK_CLICK, e)
    }
  }
}
</script>

<style lang="scss">

</style>
