<template>
  <transition name="panda-picker-fade">
    <v-popup
      type="picker"
      :mask="true"
      :center="false"
      :z-index="zIndex"
      v-show="isVisible"
      @touchmove.prevent
      @mask-click="cancel">
      <transition name="panda-picker-move">
        <div class="panda-picker-panel panda-safe-area-pb" v-show="isVisible" @click.stop>
          <div class="panda-picker-choose border-bottom-1px">
            <span data-action="cancel" @click="cancel">{{cancelTxt}}</span>
            <span data-action="confirm" @click="confirm">{{confirmTxt}}</span>
            <h1>{{title}}</h1>
          </div>
          <div class="panda-picker-content">
            <i class="border-bottom-1px"></i>
            <i class="border-top-1px"></i>
            <div class="panda-picker-wheel-wrapper" ref="wheelWrapper">
              <div v-for="(data,index) in pickerData" :key="index">
                <ul class="wheel-scroll">
                  <li v-for="(item,index) in data" class="wheel-item" :key="index">{{item[textKey]}}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="panda-picker-footer"></div>
        </div>
      </transition>
    </v-popup>
  </transition>
</template>

<script>
  import BScroll from 'better-scroll'
  import VPopup from '../popup/VPopup'
  import apiMixin from '../../common/mixins/api'
  import basicPickerMixin from '../../common/mixins/basic-picker'
  import pickerMixin from '../../common/mixins/picker'

  const COMPONENT_NAME = 'v-picker'

  const EVENT_SELECT = 'select'
  const EVENT_VALUE_CHANGE = 'value-change'
  const EVENT_CANCEL = 'cancel'
  const EVENT_CHANGE = 'change'

  export default {
    components: {
      VPopup
    },
    name: COMPONENT_NAME,
    mixins: [apiMixin, basicPickerMixin, pickerMixin],
    data() {
      return {
        pickerData: this.data.slice(),
        pickerSelectedIndex: this.selectedIndex
      }
    },
    created() {
      this.pickerSelectedVal = []
      if (!this.pickerSelectedIndex.length) {
        this.pickerSelectedIndex = []
        for (let i = 0; i < this.pickerData.length; i++) {
          this.pickerSelectedIndex[i] = 0
        }
      }
    },
    methods: {
      confirm() {
        if (!this.canConfirm()) {
          return
        }
        this.hide()

        let changed = false
        const pickerSelectedText = []

        const dataLength = this.pickerData.length
        const selectedValLength = this.pickerSelectedVal.length

        if (selectedValLength !== dataLength) {
          if (selectedValLength > dataLength) {
            this.pickerSelectedVal.splice(dataLength)
            this.pickerSelectedIndex.splice(dataLength)
          }
          changed = true
        }

        for (let i = 0; i < dataLength; i++) {
          const index = this.wheels[i].getSelectedIndex()
          this.pickerSelectedIndex[i] = index

          let value = null
          let text = ''
          if (this.pickerData[i].length) {
            value = this.pickerData[i][index][this.valueKey]
            text = this.pickerData[i][index][this.textKey]
          }
          if (this.pickerSelectedVal[i] !== value) {
            changed = true
          }
          this.pickerSelectedVal[i] = value
          pickerSelectedText[i] = text
        }

        this.$emit(EVENT_SELECT, this.pickerSelectedVal, this.pickerSelectedIndex, pickerSelectedText)

        if (changed) {
          this.$emit(EVENT_VALUE_CHANGE, this.pickerSelectedVal,
            this.pickerSelectedIndex, pickerSelectedText)
        }
      },
      cancel() {
        this.hide()
        this.$emit(EVENT_CANCEL)
      },
      show() {
        if (this.isVisible) {
          return
        }

        this.isVisible = true
        if (!this.wheels || this.dirty) {
          this.$nextTick(() => {
            this.wheels = this.wheels || []
            const wheelWrapper = this.$refs.wheelWrapper
            // console.log('pickerData', this.pickerData)

            for (let i = 0; i < this.pickerData.length; i++) {
              this.createWheel(wheelWrapper, i).enable()
              this.wheels[i].wheelTo(this.pickerSelectedIndex[i])
            }
            if (this.dirty) {
              this.destroyExtraWheels()
            }
            this.dirty = false
          })
        } else {
          for (let i = 0; i < this.pickerData.length; i++) {
            this.wheels[i].enable()
            this.wheels[i].wheelTo(this.pickerSelectedIndex[i])
          }
        }
      },
      hide() {
        if (!this.isVisible) {
          return
        }
        this.isVisible = false

        for (let i = 0; i < this.pickerData.length; i++) {
          this.wheels[i].disable()
        }
      },
      setData(data, selectedIndex) {
        this.pickerSelectedIndex = selectedIndex ? [...selectedIndex] : []
        this.pickerData = data.slice()
        if (this.isVisible) {
          this.$nextTick(() => {
            const wheelWrapper = this.$refs.wheelWrapper
            this.pickerData.forEach((item, i) => {
              this.createWheel(wheelWrapper, i)
              this.wheels[i].wheelTo(this.pickerSelectedIndex[i])
            })
            this.destroyExtraWheels()
          })
        } else {
          this.dirty = true
        }
      },
      refill(datas) {
        const ret = []
        if (!datas.length) {
          return ret
        }
        datas.forEach((data, index) => {
          ret[index] = this.refillColumn(index, data)
        })
        return ret
      },
      refillColumn(index, data) {
        const wheelWrapper = this.$refs.wheelWrapper
        const scroll = wheelWrapper.children[index].querySelector('.wheel-scroll')
        let wheel = this.wheels ? this.wheels[index] : false
        let dist = 0
        if (scroll && wheel) {
          const oldData = this.pickerData[index]
          this.$set(this.pickerData, index, data)
          const selectedIndex = wheel.getSelectedIndex()
          if (oldData.length) {
            const oldValue = oldData[selectedIndex][this.valueKey]
            for (let i = 0; i < data.length; i++) {
              if (data[i][this.valueKey] === oldValue) {
                dist = i
                break
              }
            }
          }
          this.pickerSelectedIndex[index] = dist
          this.$nextTick(() => {
            // recreate wheel so that the wrapperHeight will be correct.
            wheel = this.createWheel(wheelWrapper, index)
            wheel.wheelTo(dist)
          })
        }
        return dist
      },
      scrollTo(index, dist) {
        const wheel = this.wheels[index]
        this.pickerSelectedIndex[index] = dist
        wheel.wheelTo(dist)
      },
      refresh() {
        this.$nextTick(() => {
          this.wheels.forEach((wheel) => {
            wheel.refresh()
          })
        })
      },
      createWheel(wheelWrapper, i) {
        if (!this.wheels[i]) {
          const wheel = new BScroll(wheelWrapper.children[i], {
            wheel: {
              selectedIndex: this.pickerSelectedIndex[i] || 0
            },
            swipeTime: this.swipeTime,
            observeDOM: false
          })
          this.wheels[i] = wheel
          wheel.on('scrollEnd', () => {
            this.$emit(EVENT_CHANGE, i, wheel.getSelectedIndex())
          })
        } else {
          this.wheels[i].refresh()
        }
        return this.wheels[i]
      },
      destroyExtraWheels() {
        const dataLength = this.pickerData.length
        if (this.wheels.length > dataLength) {
          const extraWheels = this.wheels.splice(dataLength)
          extraWheels.forEach((wheel) => {
            wheel.destroy()
          })
        }
      },
      canConfirm() {
        return this.wheels.every(wheel => !wheel.isInTransition)
      }
    }
  }
</script>

