/*
 * @Author: cocol cocol@qq.com
 * @Date: 2024-03-07 23:08:28
 * @LastEditors: cocol cocol@qq.com
 * @LastEditTime: 2024-03-08 00:32:16
 * @FilePath: \vue3\src\demos\simple.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  name: "simple",
  schema: {
    description: "A simple form example.",
    type: "object",
    required: ["firstName", "lastName"],
    properties: {
      firstName: {
        type: "string",
        default: "Chuck",
      },
      lastName: {
        type: "string",
      },
      telephone: {
        type: "string",
        minLength: 10,
      },
    },
  },
  uiSchema: {
    title: "A registration form",
    properties: {
      firstName: {
        title: "First name",
      },
      lastName: {
        title: "Last name",
      },
      telephone: {
        title: "Telephone",
      },
    },
  },
  default: {
    firstName: "chuck",
    lastName: "Norris",
    age: 75,
    bio: "Roundhouse kicking asses since 1940",
    password: "noneed",
  },
}
