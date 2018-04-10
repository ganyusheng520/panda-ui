<template>
    <transition name="slide">
        <div class="page">
            <div class="page__hd">
                <h1 class="page__title">Tab</h1>
            </div>
            <div class="page__bd">
                <v-tab>
                    <v-tab-item
                    v-for="(item, $index) in tabList"
                    :text="item.text"
                    :active="activeTabIndex === $index"
                    :index="$index"
                    :key="$index"
                    @updateActiveTab="updateActiveTab($index)">
                    </v-tab-item>
                    </v-tab>
                    <v-tab-container
                    :current-index="activeTabIndex"
                    :container-list="tabList">
                    <div class="tab-container__item" v-for="(_, index) in tabList" :slot="index">
                    {{_.text}}
                    </div>
                </v-tab-container>
            </div>
        </div>
    </transition>
</template>

<script>

export default {
  name: 'tab-example',
  data() {
    return {
      activeTabIndex: 0,
      tabList: [
        {
          text: '天时',
        },
        {
          text: '地利',
        },
        {
          text: '人和',
        },
      ],
    }
  },
  methods: {
    updateActiveTab(index) {
      this.activeTabIndex = index
    },
  },
}
</script>

<style lang="scss">
    @import "../assets/example";
</style>
