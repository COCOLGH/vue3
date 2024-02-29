import { defineComponent, h, ref, reactive } from "vue"
const img = require("./assets/logo.png") // eslint-disable-line

export default defineComponent({
  setup() {
    const state = reactive({
      name: "闭包应用例子",
    })

    const numberRef = ref(1)

    // setInterval(() => {
    //   state.name += "3"
    //   numberRef.value += 1
    // }, 1000)

    return () => {
      const num = numberRef.value
      // jsx 应用例子
      return (
        <div id="app">
          <img src={img} alt="vue logo.png" />
          <p>{state.name + num}</p>
        </div>
      )
    }

    //  setup 返回render函数应用例子
    //    return () => {
    //       const num = numberRef.value
    //       return h('div', {id: 'app'}, [
    //          h('p', state.name)
    //       ])
    //    }
  },
})
