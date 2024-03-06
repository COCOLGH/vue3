import { defineComponent, ref } from "vue"

import * as Monaco from "monaco-editor"
import type { PropType } from "vue"
import { createUseStyles } from "vue-jss"

const useStyles = createUseStyles({
  container: {
    border: "1px solid #eee",
    display: "flex",
    flexDirection: "column",
    borderRadius: 5,
  },
  title: {
    backgroundColor: "#eee",
    padding: "10px 0",
    paddingLeft: 20,
  },
  code: {
    flexGrow: 1,
  },
})

export default defineComponent({
  props: {
    code: {},
    title: {},
  },
  setup(props, { slots }) {
    const classesRef = useStyles()

    return () => {
      const classes = classesRef.value

      return (
        <div class={classes.container}>
          <div class={classes.title}>
            <span>{props.title}</span>
          </div>
        </div>
      )
    }
    // <div class={classes.code} ref={containerRef}></div>
  },
})
