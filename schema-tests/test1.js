//ajv 第一个应用例子

const Ajv = require("ajv")
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

const schema = {
  type: "object",
  properties: {
    foo: {
      type: "integer",
    },
    bar: {
      type: "string",
      minLength: 5,
    },
  },
  required: ["foo"],
  additionalProperties: false,
}

const validate = ajv.compile(schema)

const data = {
  foo: 1,
  bar: "abc52",
}

const valid = validate(data)
if (!valid) console.log(validate.errors)
