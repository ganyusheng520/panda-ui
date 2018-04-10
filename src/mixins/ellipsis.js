export default {
  filters: {
    ellipsis(value, len = 10) {
      if (!value) return ''
      return value.length > len ? `${value.substring(0, len)}...` : value
    },
  },
}
