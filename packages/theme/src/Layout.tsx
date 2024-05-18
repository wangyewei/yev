import { defineComponent } from "vue"
import { useData } from "vitepress"
export default defineComponent({
  setup() {
    const { frontmatter } = useData()
    console.log(frontmatter)
    return () => <div>custom theme</div>
  },
})
