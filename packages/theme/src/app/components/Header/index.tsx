import { defineComponent } from 'vue'

import HeaderWithShadow from './HeaderWithShadow'

export default defineComponent({
  setup() {
    return () => <HeaderWithShadow>header</HeaderWithShadow>
  }
})
