<template>
   <ul class="tab-container">
      <li v-for="(_,$index) in containerList"
          v-if="currentIndex === $index">
        <slot :name="$index"></slot>
      </li>
   </ul>
</template>
<script>

  export default {
    name: 'v-tab-container',
    data() {
      return {
      }
    },
    props: {
      currentIndex: {
        type: Number,
        default: 0
      },
      containerList: {
        type: Array,
        default: []
      }
    }
  }
</script>
