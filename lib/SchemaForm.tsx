/*
 * @Author: cocol cocol@qq.com
 * @Date: 2024-03-07 23:08:28
 * @LastEditors: cocol cocol@qq.com
 * @LastEditTime: 2024-03-08 01:02:29
 * @FilePath: \vue3\lib\SchemaForm.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent, PropType } from "vue"
import { Schema, SchemaTypes } from "./type"

export default defineComponent({
  props: {
    schema: {
      type: Object as PropType<Schema>,
      required: true,
    },
    value: {
      required: true,
    },
    onChange: {
      type: Function as PropType<(v: any) => void>,
      required: true,
    },
  },
  name: "SchemaForm",
  setup(props, { slots, emit, attrs }) {
    const schema = props.schema // eslint-disable-line
    const type = schema?.type

    return () => {
      switch (type) {
        case SchemaTypes.STRING: {
          return <input type="text" />
        }
      }
      return <div>This is Form</div>
    }
  },
})
