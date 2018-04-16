<template>
    <transition name="slide">
        <div class="page">
            <div class="page__hd">
                <h1 class="page__title">ActionSheet</h1>
            </div>
            <div class="page__bd">
                <v-button-box>
                    <v-button
                            size="normal"
                            type="primary"
                            @onButtonClick="showDefault">ActionSheet</v-button>
                </v-button-box>
                <v-button-box>
                    <v-button
                            size="normal"
                            type="primary"
                            @onButtonClick="showActive">ActionSheet - active</v-button>
                </v-button-box>
                <v-button-box>
                    <v-button
                            size="normal"
                            type="primary"
                            @onButtonClick="showPickerStyle">ActionSheet - picker style</v-button>
                </v-button-box>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
      name: 'action-example',
      methods: {
        showDefault() {
          this.actionSheet = this.$createActionSheet({
            title: '我是标题~~~',
            data: [
              {
                content: '<em>align - center</em>',
                class: 'cube-foo'
              },
              {
                content: 'align - left',
                align: 'left'
              },
              {
                content: 'align - right',
                align: 'right'
              }
            ],
            onSelect: (item) => {
              this.$createToast({
                txt: `Clicked ${item.content}`,
                type: 'correct',
                time: 1000
              }).show()
            }
          })
          this.actionSheet.show()
        },
        showActive() {
          this.actionSheet = this.$createActionSheet({
            title: '我是标题~~~',
            active: 0,
            data: [
              {
                content: '舒适型'
              },
              {
                content: '七座商务'
              },
              {
                content: '豪华型'
              }
            ],
            onSelect: (item) => {
              this.$createToast({
                txt: `Clicked ${item.content}`,
                type: 'correct',
                time: 1000
              }).show()
            },
            onCancel: () => {
              this.$createToast({
                txt: `Clicked canceled`,
                type: 'warn',
                time: 1000
              }).show()
            }
          })
          this.actionSheet.show()
        },
        showPickerStyle() {
          this.actionSheet = this.$createActionSheet({
            title: '我是标题~~~',
            pickerStyle: true,
            data: [
              {
                content: '舒适型'
              },
              {
                content: '七座商务'
              },
              {
                content: '豪华型'
              }
            ],
            onSelect: (item) => {
              this.$createToast({
                txt: `Clicked ${item.content}`,
                type: 'correct',
                time: 1000
              }).show()
            },
            onCancel: () => {
              this.$createToast({
                txt: 'Clicked canceled',
                type: 'warn',
                time: 1000
              }).show()
            }
          })
          this.actionSheet.show()
        }
      }
    }
</script>

<style scoped>

</style>