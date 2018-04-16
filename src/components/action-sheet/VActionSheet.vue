<template>
  <transition name="panda-action-sheet-fade">
    <v-popup
      type="action-sheet"
      :class="{'panda-action-sheet_picker': pickerStyle}"
      :center="false"
      :mask="true"
      :z-index="zIndex"
      v-show="isVisible"
      @touchmove.prevent="noop"
      @mask-click="cancel">
      <transition name="panda-action-sheet-move">
        <div class="panda-action-sheet-panel panda-safe-area-pb" v-show="isVisible" @click.stop="noop">
          <h1 class="panda-action-sheet-title border-bottom-1px" v-show="pickerStyle || title">{{title}}</h1>
          <div class="panda-action-sheet-content">
            <ul class="panda-action-sheet-list">
              <li
                class="panda-action-sheet-item border-bottom-1px"
                v-for="(item, index) in data"
                :data-align="item.align"
                :class="[
                  item.class || '',
                  index === active ? 'panda-action-sheet-item_active': ''
                ]"
                v-html="item.content"
                @click="itemClick(item, index)"></li>
            </ul>
          </div>
          <div class="panda-action-sheet-space"></div>
          <div class="panda-action-sheet-cancel" @click="cancel"><span>取消</span></div>
        </div>
      </transition>
    </v-popup>
  </transition>
</template>

<script type="text/ecmascript-6">
  import VPopup from '../popup/VPopup'
  import apiMixin from '../../common/mixins/api'

  const COMPONENT_NAME = 'v-action-sheet'
  const EVENT_SELECT = 'select'
  const EVENT_CANCEL = 'cancel'

  export default {
    components: {
      VPopup
    },
    name: COMPONENT_NAME,
    mixins: [apiMixin],
    props: {
      data: {
        type: Array,
        default() {
          return []
        }
      },
      active: {
        type: Number,
        default: -1
      },
      title: {
        type: String,
        default: ' '
      },
      pickerStyle: {
        type: Boolean,
        default: false
      },
      zIndex: {
        type: Number
      }
    },
    methods: {
      noop() {
      },
      cancel() {
        this.hide()
        this.$emit(EVENT_CANCEL)
      },
      itemClick(item, index) {
        this.hide()
        this.$emit(EVENT_SELECT, item, index)
      }
    }
  }
</script>

