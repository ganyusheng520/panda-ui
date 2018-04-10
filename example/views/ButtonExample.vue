<template>
    <transition name="slide">
        <div class="page">
            <div class="page__hd">
                <h1 class="page__title">Button</h1>
            </div>
            <div class="page__bd">
                <v-button-box>
                    <v-button>默认按钮</v-button>
                </v-button-box>
                <v-button-box>
                    <v-button size="large" type="primary" @onButtonClick="onClick('大按钮')">大按钮</v-button>
                </v-button-box>
                <v-button-box>
                    <v-button size="large" type="primary" :disabled="true">大按钮</v-button>
                </v-button-box>
                <v-button-box>
                    <v-button type="primary">中按钮</v-button>
                </v-button-box>
                <v-button-box>
                    <v-button type="primary" :disabled="true">中按钮</v-button>
                </v-button-box>
                <v-button-box>
                    <v-button size="small" type="primary">小按钮</v-button>
                    <v-button size="small" type="primary" :disabled="true">小按钮</v-button>
                </v-button-box>
            </div>
        </div>
    </transition>
</template>

<script>

export default {
  name: 'button-example',
  data() {
    return {
    }
  },
  methods: {
    onClick(val) {
      console.log(val)
    },
  },
}
</script>

<style lang="scss">
    @import "../assets/example";
</style>
