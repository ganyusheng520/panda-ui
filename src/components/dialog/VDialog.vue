<template>
  <transition name="panda-dialog-fade">
    <v-popup type="dialog" :z-index="zIndex" :mask="true" :center="true" v-show="isVisible">
      <div class="panda-dialog-main">
        <span class="panda-dialog-close" v-show="showClose" @click="close"><i class="panda-ic__close"></i></span>
        <div :class="containerClass">
          <p class="panda-dialog-icon" v-if="icon"><i :class="icon"></i></p>
          <h2 v-if="title || $slots.title" class="panda-dialog-title">
            <slot name="title">
              <p class="panda-dialog-title-def">{{title}}</p>
            </slot>
          </h2>
          <div class="panda-dialog-content">
            <slot name="content">
              <div class="panda-dialog-content-def">
                <p v-html="content"></p>
              </div>
            </slot>
          </div>
          <div class="panda-dialog-btns" :class="{'border-right-1px': isConfirm}">
            <slot name="btns">
              <a :href="cancelButton.href" class="panda-dialog-btn border-top-1px" :class="{'panda-dialog-btn_highlight': cancelButton.active, 'panda-dialog-btn_disabled': cancelButton.disabled}" v-if="isConfirm" @click="cancel">{{cancelButton.text}}</a>
              <a :href="confirmButton.href" class="panda-dialog-btn border-top-1px" :class="{'panda-dialog-btn_highlight': confirmButton.active, 'panda-dialog-btn_disabled': confirmButton.disabled}" @click="confirm">{{confirmButton.text}}</a>
            </slot>
          </div>
        </div>
      </div>
    </v-popup>
  </transition>
</template>

<script>
import VPopup from '../popup/VPopup'
import apiMixin from '../../common/mixins/api'

const COMPONENT_NAME = 'v-dialog'
const EVENT_CONFIRM = 'confirm'
const EVENT_CANCEL = 'cancel'
const EVENT_CLOSE = 'close'

const defHref = 'javascript:;'
const defConfirmBtn = {
  text: '确定',
  active: true,
  disabled: false,
  href: defHref
}
const defCancelBtn = {
  text: '取消',
  active: false,
  disabled: false,
  href: defHref
}
const parseBtn = (btn, defBtn) => {
  if (typeof btn === 'string') {
    btn = {
      text: btn
    }
  }
  return Object.assign({}, defBtn, btn)
}

export default {
  name: COMPONENT_NAME,
  mixins: [apiMixin],
  props: {
    type: {
      type: String,
      default: 'alert'
    },
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    showClose: {
      type: Boolean,
      default: false
    },
    confirmBtn: {
      type: [Object, String],
      default() {
        return {
          ...defConfirmBtn
        }
      }
    },
    cancelBtn: {
      type: [Object, String],
      default() {
        return {
          ...defCancelBtn
        }
      }
    },
    zIndex: {
      type: Number
    }
  },
  data() {
    return {
      defHref
    }
  },
  computed: {
    confirmButton() {
      return parseBtn(this.confirmBtn, defConfirmBtn)
    },
    cancelButton() {
      return parseBtn(this.cancelBtn, defCancelBtn)
    },
    isConfirm() {
      return this.type === 'confirm'
    },
    containerClass() {
      return `panda-dialog-${this.type}`
    }
  },
  methods: {
    confirm(e) {
      if (this.confirmButton.disabled) {
        return
      }
      this.hide()
      this.$emit(EVENT_CONFIRM, e)
    },
    cancel(e) {
      if (this.cancelButton.disabled) {
        return
      }
      this.hide()
      this.$emit(EVENT_CANCEL, e)
    },
    close(e) {
      this.hide()
      this.$emit(EVENT_CLOSE, e)
    }
  },
  components: {
    VPopup
  }
}
</script>