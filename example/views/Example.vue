<template>
    <div class="page">
        <div class="page__hd">
            <h1 class="page__title">panda-ui</h1>
            <p class="page__desc">这是一套基于移动端最新视觉规范的基础VUE组件库，由ganyusheng量身设计，令用户的使用感知更加统一。</p>
        </div>
        <div class="page__bd">
            <v-cell-title>表单组件</v-cell-title>
            <v-cell-group>
                <v-cell left-text="Button" right-text="查看更多" @onCellClick="link('/button')">
                    <v-icon :size="16" slot="cell-ft" class-name="panda-ic__arrow"></v-icon>
                </v-cell>
                <v-cell left-text="Input" @onCellClick="link('/input')">
                    <v-icon :size="16" slot="cell-ft" class-name="panda-ic__arrow"></v-icon>
                </v-cell>
                <v-cell left-text="Switch" @onCellClick="link('/switch')">
                    <v-icon :size="16" slot="cell-ft" class-name="panda-ic__arrow"></v-icon>
                </v-cell>
                <v-cell left-text="Textarea" right-text="敬请期待">
                    <v-icon :size="16" slot="cell-ft" class-name="panda-ic__arrow"></v-icon>
                </v-cell>
                <v-cell left-text="Radio" right-text="敬请期待">
                    <v-icon :size="16" slot="cell-ft" class-name="panda-ic__arrow"></v-icon>
                </v-cell>
                <v-cell left-text="CheckBox" right-text="敬请期待">
                    <v-icon :size="16" slot="cell-ft" class-name="panda-ic__arrow"></v-icon>
                </v-cell>
            </v-cell-group>
            <v-cell-title>操作反馈</v-cell-title>
            <v-cell-group>
                <v-cell left-text="Loading" @onCellClick="link('/loading')">
                    <v-icon :size="16" slot="cell-ft" class-name="panda-ic__arrow"></v-icon>
                </v-cell>
                <v-cell left-text="Toast" @onCellClick="link('/toast')">
                    <v-icon :size="16" slot="cell-ft" class-name="panda-ic__arrow"></v-icon>
                </v-cell>
                <v-cell left-text="Picker" @onCellClick="link('/picker')">
                    <v-icon :size="16" slot="cell-ft" class-name="panda-ic__arrow"></v-icon>
                </v-cell>
            </v-cell-group>
            <v-cell-title>导航相关</v-cell-title>
            <v-cell-group>
                <v-cell left-text="Tab" @onCellClick="link('/tab')">
                    <v-icon :size="16" slot="cell-ft" class-name="panda-ic__arrow"></v-icon>
                </v-cell>
                <v-cell left-text="Nav" right-text="敬请期待">
                    <v-icon :size="16" slot="cell-ft" class-name="panda-ic__arrow"></v-icon>
                </v-cell>
            </v-cell-group>
        </div>
    </div>
</template>

<script>

export default {
  name: 'example',
  data() {
    return {
      activeTabIndex: 0,
      isSwitched: true
    }
  },
  methods: {
    link(path) {
      this.$router.push(path)
    }
  }
}
</script>

