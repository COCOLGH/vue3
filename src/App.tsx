import { defineComponent, ref } from "vue"
import { createUseStyles } from "vue-jss"
import MonacoEditor from "./components/MonacoEditor"

function toJson(data: any) {
  return JSON.stringify(data, null, 2)
}

const schema = {
  type: "string",
}

const useStyles = createUseStyles({
  editor: {
    minHeight: 400,
  },
})

export default defineComponent({
  setup() {
    const classesRef = useStyles()

    const schemaRef = ref(schema)

    const handleCodeChange = (code: string) => {
      let schema: any
      try {
        schema = JSON.parse(code)
      } catch (err) {
        schemaRef.value = schema
      }
    }

    return () => {
      const classes = classesRef.value

      const code = toJson(schemaRef.value)

      return (
        <div>
          <MonacoEditor
            code={code}
            onChange={handleCodeChange}
            title="schema代码编辑器demo"
            class={classes.editor}
          />
        </div>
      )
    }
  },
})
