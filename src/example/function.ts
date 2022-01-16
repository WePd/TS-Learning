// 函数
// function add1(arg1: number, arg2: number): number {
//   return arg1 + arg2
// }

// const add2 = (arg1: number, arg2: number): number => arg1 + arg2

let add: (arg1: number, arg2: number) => number // add是一个函数，有两个参数，都为number， 且返回值也是number

add = (arg1: number, arg2: number): number => arg1 + arg2
add = (arg1: number, arg2: number) => arg1 + arg2

// 接口定义函数
// interface Add {
//   (n: number, m: number): number
// }
// 两种方式是相同的
type Add = (n: number, m: number) => number // 这是类型别名的方式
let addFunc: Add

addFunc = (arg1: number, arg2: number) => arg1 + arg2

// 函数参数

// 可选参数
// 可选参数只需要再可选的参数后面加上？就可以了。但是一定要放在必选参数的后面

// 默认参数
let func = (m: number, n = 3) => m + n
console.log(func(1)) // 传第二个参数以传入的为主，不传则使用默认值

// 剩余参数

// 重载
function handleData(x: number): number[]
function handleData(x: string): string[]

function handleData(x: any): any {
  if (typeof x === "string") {
    return x.split("")
  } else {
    return x
      .toString()
      .split(" ")
      .map((item: any) => Number(item))
  }
}

console.log(handleData(123).map((item) => item.toFixed()))
