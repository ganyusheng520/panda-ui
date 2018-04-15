<template>
  <transition name="slide">
    <div class="page">
      <div class="page__hd">
        <h1 class="page__title">Picker</h1>
      </div>
      <div class="page__bd">
        <v-button-box>
          <v-button
                  size="normal"
                  type="primary"
                  @onButtonClick="showPicker">Picker</v-button>
        </v-button-box>
        <v-button-box>
          <v-button
                  size="normal"
                  type="primary"
                  @onButtonClick="showMutiPicker">Multi-column Picker</v-button>
        </v-button-box>
        <v-button-box>
          <v-button
                  size="normal"
                  type="primary"
                  @onButtonClick="showAliasPicker">Use alias</v-button>
        </v-button-box>
        <v-button-box>
          <v-button
                  size="normal"
                  type="primary"
                  @onButtonClick="showSetDataPicker">Use setData</v-button>
        </v-button-box>
        <v-button-box>
          <v-button
                  size="normal"
                  type="primary"
                  @onButtonClick="showUpdatePropsPicker">Use $updateProps</v-button>
        </v-button-box>
        <v-button-box>
          <v-button
                  size="normal"
                  type="primary"
                  @onButtonClick="showNormalTimePicker">Normal Time Picker</v-button>
        </v-button-box>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'
import { data1, data2, data3 } from '../data/picker'
import NormalTimePicker from '../components/normal-time-picker'
import createAPI from '../../src/modules/create-api'

createAPI(Vue, NormalTimePicker, ['select', 'cancel'], false)
export default {
  mounted() {
    this.picker = this.$createPicker({
      title: 'Picker',
      data: [data1],
      onSelect: this.selectHandle,
      onCancel: this.cancelHandle
    })

    this.mutiPicker = this.$createPicker({
      title: 'Multi-column Picker',
      data: [data1, data2, data3],
      onSelect: this.selectHandle,
      onCancel: this.cancelHandle
    })

    this.setDataPicker = this.$createPicker({
      title: 'Use SetData',
      onSelect: this.selectHandle,
      onCancel: this.cancelHandle
    })

    this.aliasPicker = this.$createPicker({
      title: 'Use Alias',
      data: [
        [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }]
      ],
      alias: {
        value: 'id',
        text: 'name'
      },
      onSelect: this.selectHandle,
      onCancel: this.cancelHandle
    })

    this.updatePropsPicker = this.$createPicker({
      title: 'Use $updateProps',
      data: [data1],
      selectedIndex: [0],
      onSelect: this.selectHandle,
      onCancel: this.cancelHandle
    })

    this.normalTimePicker = this.$createNormalTimePicker({
      selectedIndex: [10, 20, 59],
      onSelect: this.selectHandle,
      onCancel: this.cancelHandle
    })
  },
  methods: {
    showPicker() {
      this.picker.show()
    },
    showMutiPicker() {
      this.mutiPicker.show()
    },
    showAliasPicker() {
      this.aliasPicker.show()
    },
    showSetDataPicker() {
      this.setDataPicker.setData([data1, data2, data3], [1, 2, 3])
      this.setDataPicker.show()
    },
    showUpdatePropsPicker() {
      this.updatePropsPicker.show()
      setTimeout(() => {
        this.updatePropsPicker.$updateProps({
          title: 'Updated',
          data: [data1, data2, data3],
          selectedIndex: [1, 2, 3]
        })
      }, 1000)
    },
    showNormalTimePicker() {
      this.normalTimePicker.show()
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      // this.$createDialog({
      //   type: 'warn',
      //   content: `Selected Item: <br/> - value: ${selectedVal.join(
      //     ', '
      //   )} <br/> - index: ${selectedIndex.join(
      //     ', '
      //   )} <br/> - text: ${selectedText.join(' ')}`,
      //   icon: 'panda-ic__alert'
      // }).show()
    },
    cancelHandle() {
      this.$createToast({
        type: 'correct',
        txt: 'Picker canceled',
        time: 1000
      }).show()
    }
  }
}
</script>
