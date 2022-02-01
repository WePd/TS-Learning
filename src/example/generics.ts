// const getArray = (value: any, time = 5): any[] => {
//   return new Array(time).fill(value)
// }

// console.log(getArray(2, 3).map((item) => item))
// console.log(getArray(2, 3).map((item) => item.length()))

// 上面的情况下会丢失类型检测
const getArray = <T>(value: T, time = 5): T[] => {
  return new Array(time).fill(value)
}

console.log(getArray<number>(2, 3).map((item) => item))
// const getArray: <number>(value: number, time?: number) => number[]
// console.log(getArray(2, 3).map((item) => item.length())) // number类型没有length属性

// 使用两个泛型

const getArray1 = <Y, N>(params1: Y, params2: N, times = 5): [Y, N][] => {
  return new Array(times).fill([params1, params2])
}

// console.log(getArray1<string, number>("times", 123, 3))
getArray1<string, number>("times", 123, 3).forEach((item) =>
  console.log(item[0])
)

// 函数类型别名
// type GetArray = <T>(arg: T, times: number) => T[]
// const getArray2: GetArray = (arg: any, times = 3) => {
//   return new Array(times).fill(arg)
// }

// 泛型约束
interface ValueHasLength {
  length: number
}
const getArray3 = <T extends ValueHasLength>(arg: T, times = 3): T[] => {
  return new Array(times).fill(arg)
}
console.log(getArray3("123", 2))
// console.log(getArray3(123, 2)); // number类型没有length属性 出错

console.log(
  {
    length: 4,
  },
  2
)

//
