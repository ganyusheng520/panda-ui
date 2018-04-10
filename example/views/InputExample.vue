<template>
    <transition name="slide">
        <div class="page">
            <div class="page__hd">
                <h1 class="page__title">Input</h1>
            </div>
            <div class="page__bd">
                <v-cell-title>默认输入框</v-cell-title>
                <v-cell-group>
                    <v-input label="输入框" place-holder="比如：小红" v-model="name"/>
                </v-cell-group>
                <v-cell-title>可清空输入框</v-cell-title>
                <v-cell-group>
                    <v-input label="账号"
                         place-holder="比如：example@qq.com"
                         :show-icon="true"
                         v-model="account"/>
                </v-cell-group>

            </div>
        </div>
    </transition>

</template>

<script>

export default {
  name: 'input-example',
  data() {
    return {
      name: '',
      account: '',
    }
  },
  watch: {
    name(newVal) {
      console.log(newVal)
    },
  },
}
</script>

<style lang="scss">
    @import "../assets/example";
</style>
