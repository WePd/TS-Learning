//是ES6添加的一种基本数据类型
//表示为独一无二的值

const a = Symbol()

const b = Symbol()

// console.log(a === b) // false

const s1 = Symbol("123")
const s2 = Symbol(123) // Symbol里面只可以传string 或者是 number

// Symbol是无法参与与其他类型的运算
//但是可以转化为 string 或者 boolean类型

const s4 = s1.toString()
console.log(s4) // Symbol(123) 是string类型的
console.log(Boolean(s2)) // true
console.log(!s2) // false
