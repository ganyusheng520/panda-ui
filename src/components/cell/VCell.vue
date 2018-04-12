<template>
  <div class="cell"
       :class="getCellClass"
       @click="handleClick"
  >
    <slot name="cell-hd">
      <div class="cell__hd">
        {{leftText | limit(this.limit)}}
      </div>
    </slot>
    <slot name="cell-bd">
      <div class="cell__bd align-right">
        {{rightText}}
      </div>
    </slot>
    <slot name="cell-ft">
    </slot>
    
  </div>
</template>
<script>
  import VIcon from '../icon/VIcon'

  export default {
    components: {
      VIcon
    },
    name: 'v-cell',
    filters: {
      limit(value, len = 10) {
        return value && value.length > len ? `${value.substring(0, len)}...` : value
      }
    },

    props: {
      leftText: {
        type: [String, Number],
        default: ''
      },
      limit: {
        type: Number,
        default: 10
      },
      rightText: {
        type: [String, Number],
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      getCellClass() {
        const classList = []
        if (this.disable) {
          classList.push('disabled')
        }
        return classList
      }
    },

    methods: {
      handleClick() {
        this.$emit('onCellClick')
      }
    }

  }
</script>

