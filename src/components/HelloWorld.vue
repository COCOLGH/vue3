<template>
  <div class="hello">
    <h1>{{ msg }}---{{ computedMsgRef }}***{{ theRef }}</h1>
    <!-- <h1>{{ msg.name }}</h1> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed, watchEffect } from "vue"

export default defineComponent({
  name: "HelloWorld",
  // props: {
  //   msg: String,
  // },
  setup(props, { slots, attrs, emit }) {
    const msgRef = ref("测试")
    const theRef = ref("没有在watchEffect中使用")
    // const msg = reactive({
    //   name: "456",
    // })

    setInterval(() => {
      msgRef.value += "2"
      // msg.name += "2"
    }, 5000)

    setInterval(() => {
      theRef.value += "0"
    }, 1000)

    const computedMsgRef = computed(() => {
      return msgRef.value + "00"
    })

    watchEffect(() => {
      // 只用在watchEffect函数中使用的变量发生改变时，采用触发watchEffect的逻辑
      console.log(msgRef.value)
    })

    return {
      msg: msgRef,
      computedMsgRef,
      theRef,
    }

    // return { msg }
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
