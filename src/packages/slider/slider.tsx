import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    let vModel = ref<Number>(50)
    return () => {
      return <el-slider v-model={vModel.value}></el-slider>
    }
  }
})