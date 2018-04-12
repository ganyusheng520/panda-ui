<template>
    <li class="tab__item"
        :class="{'tab__item--active': active}"
        @click="updateActive">
      <div class="tab__item-inner">{{text}}</div>
    </li>
</template>
<script>

  export default {
    name: 'v-tab-item',
    data() {
      return {
      }
    },

    props: {
      text: {
        type: String,
        default: ''
      },
      active: {
        type: Boolean,
        default: false
      },
      index: {
        type: Number,
        default: 0
      }
    },

    methods: {
      updateActive() {
        if (!this.active) {
          this.$emit('updateActiveTab', this.index)
        }
      }
    }
  }
</script>
