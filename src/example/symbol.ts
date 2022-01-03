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

let prop = "name"
// let info = {
//   name: 'lqy'
// }

// let info = {
// 	[prop]: "lqy",
// }
// console.log(info) //{name: 'lqy'}

// let info = {
// 	[`her${prop}`]: "lqy",
// }
// console.log(info) //{hername: 'lqy'}

//对于symbol值作为属性名只能使用如下的方式修改
const s5 = Symbol("name")

let info2 = {
	[s5]: "lqy",
	age: 25,
	sex: "nv",
}

console.log(info2) //{Symbol(name): 'lqy'}

//只能已这种方式修改
info2[s5] = "wxhlqy"
console.log(info2) //{Symbol(name): 'wxhlqy'}

//属性名遍历
//已symbol为属性名的变量for ... in 是无法遍历出来的

for (let key in info2) {
	console.log(key) // age sex
}

console.log(Object.keys(info2)) //['age', 'sex']

console.log(Object.getOwnPropertyNames(info2)) // ['age', 'sex']

console.log(Object.getOwnPropertySymbols(info2)) // [Symbol(name)]

console.log(Reflect.ownKeys(info2)) // ['age', 'sex', Symbol(name)]

// symbol的两个静态方法
// symbol.for() Symbol.keyFor()

const s7 = Symbol.for("lis")
//与symbol不同的是，当第二次使同一个symbol创建值的时候，第二个会在全局范围内查找，
//若是发现已经创建了值则直接返回上一个创建的值，否则就会重新创建一个新的值
const s8 = Symbol.for("lis")

//返回的是用Symbole.for()创建的变量的标识
//其他都返回的是undefined

console.log(Symbol.keyFor(s7)) // lis
