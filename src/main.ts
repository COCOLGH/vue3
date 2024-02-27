import { createApp, createVNode, defineComponent, h } from "vue"
// import App from "./App.vue"
import HelloWorld from "./components/HelloWorld.vue"
const img = require("./assets/logo.png") // eslint-disable-line

const App = defineComponent({
  render() {
    return createVNode("div", { id: "app" }, [
      createVNode("img", { alt: "vue logo", src: img }),
      createVNode(HelloWorld, { msg: "测试" }),
    ])
  },
})

createApp(App).mount("#app")
