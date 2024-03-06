/*
 * @Author: cocol cocol@qq.com
 * @Date: 2024-03-04 23:36:42
 * @LastEditors: cocol cocol@qq.com
 * @LastEditTime: 2024-03-06 22:51:59
 * @FilePath: \vue3\src\App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent, ref, reactive } from "vue"

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
      return (
        <div id="app">
          <p>{state.name + num}</p>
        </div>
      )
    }

    //    return () => {
    //       const num = numberRef.value
    //       return h('div', {id: 'app'}, [
    //          h('p', state.name)
    //       ])
    //    }
  },
})
