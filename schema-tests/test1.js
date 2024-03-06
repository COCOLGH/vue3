//ajv 第一个应用例子

const Ajv = require("ajv")
const ajv = new Ajv({ allErrors: true }) // options can be passed, e.g. {allErrors: true}

// 错误信息翻译为中文需要使用的插件/库
const localize = require("ajv-i18n")

// 自定义错误信息需要使用的插件/库，且在new Ajv时，必须写为=> new Ajv({allErrors: true})
require("ajv-errors")(ajv)

// 需要使用format是，需要引入format，否则报错，format'xxx' ignored in schema...
// 只有type是string和integer类型才可以使用format进行校验
const addFormats = require("ajv-formats")
addFormats(ajv)

// 自定义校验规则
ajv.addFormat("validTestFunc", (data) => {
  return data === "testceshi"
})

// 自定义关键字
ajv.addKeyword({
  keyword: "keywordTest",
  type: "string",
  // 方式一：简单、通用，不可以满足特性化细节的需求；性能最优；代码可读性差
  //   validate(schema, data) {
  //     if (schema === true) return true
  //     else return schema.length === 5
  //   },
  // 方式二: 需要return一个函数
  //   compile(sch, parentSchema) {
  //     console.log(sch, parentSchema)
  //     return () => true
  //   },
  // 方式三
  //   metaSchema: {
  //     type: "boolean",
  //   },
  // 方式四：推荐使用方式
  macro() {
    return {
      minLength: 3,
    }
  },
})

const schema = {
  type: "object",
  properties: {
    foo: {
      type: "integer",
    },
    bar: {
      type: "string",
      //   format: "validTestFunc",
    },
    arr: {
      type: "array",
    },
    name: {
      type: "string",
      keywordTest: false,
    },
    lengthValid: {
      type: "string",
      minLength: 5,
      errorMessage: "校验错误提示",
    },
  },
  required: ["foo"],
  additionalProperties: false,
}

const data = {
  foo: 1,
  bar: "testceshi",
  arr: [1, 2],
  name: "ttt",
  lengthValid: "123",
}

const validate = ajv.compile(schema)
const valid = validate(data)

if (!valid) {
  localize.zh(validate.errors)
  console.log(validate.errors)
}
