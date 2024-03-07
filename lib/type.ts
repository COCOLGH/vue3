export enum SchemaTypes {
  "NUMBER" = "number",
  "INTEGER" = "integer",
  "STRING" = "string",
  "0BJECT" = "object",
  "ARRAY" = "array",
  "BOOLEAN" = "boolean",
}

type SchemaRef = { $ref: string }

// types Schema = any
export interface Schema {
  //写string的原因：如无stirng，则使用者需要引入SchemaTypes，用SchemaTypes.NUMBER声明，而非'number'。加上string可简化使用这声明代码
  type: SchemaTypes | string
  const?: any
  format?: string
  default?: any
  properties?: {
    [key: string]: Schema | { $ref: string }
  }
  items?: Schema | Schema[] | SchemaRef
  dependencies?: {
    [key: string]: string[] | Schema | SchemaRef
  }
  oneOf?: Schema[]
  // uiSchema 会使用到
  // vjsf?: VueJsonSchemaConfig
  required?: string[]
  enum?: any[]
}
