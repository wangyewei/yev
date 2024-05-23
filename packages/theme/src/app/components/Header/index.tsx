import { defineComponent } from 'vue'

import HeaderWithShadow from './HeaderWithShadow'
import BluredBackground from './BluredBackground'

export default defineComponent({
  setup() {
    return () => (
      <HeaderWithShadow>
        <BluredBackground />
      </HeaderWithShadow>
    )
  }
})
