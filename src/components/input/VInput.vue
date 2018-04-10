<template>
  <div class="cell cell__input">
   <slot name="cell-hd">
      <div class="cell__hd" v-if="label">
        <label class="label">{{label | ellipsis(5)}}</label>
      </div>
    </slot>
    <slot name="cell-bd">
      <input 
        class="input fz16" 
        :maxlength="maxLength" 
        :placeholder="placeHolder"
        v-model="currentValue"
      />
    </slot>
    <v-icon 
      v-if="showIcon"
      class="cell__ft" 
      class-name="cell__ft icon-103"
      :size="16" 
      @onIconClick="clear"></v-icon>
  </div>
</template>
<script>
  import debounce from 'lodash/debounce'
  import VIcon from '../icon/VIcon'
  import ellipsis from '../../mixins/ellipsis'

  export default {
    components: {
      VIcon,
    },
    name: 'v-input',
    mixins: [ellipsis],
    props: {
      value: {
        type: String,
      },
      label: {
        type: String,
        default: '',
      },
      placeHolder: {
        type: String,
        default: '',
      },
      maxLength: {
        type: Number,
        default: 100,
      },
      showIcon: {
        type: Boolean,
        default: false,
      },
    },

    computed: {
      currentValue: {
        get() {
          return this.value
        },
        set: debounce(function fn(val) {
          this.$emit('input', val)
        }, 200),
      },
    },

    methods: {
      clear() {
        this.currentValue = ''
      },
    },
  }

</script>

