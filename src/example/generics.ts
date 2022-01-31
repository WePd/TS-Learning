// const getArray = (value: any, time = 5): any[] => {
//   return new Array(time).fill(value)
// }

// console.log(getArray(2, 3).map((item) => item))
// console.log(getArray(2, 3).map((item) => item.length()))

// 上面的情况下会丢失类型检测
const getArray = <T>(value: T, time = 5): T[] => {
  return new Array(time).fill(value)
}

console.log(getArray(2, 3).map((item) => item))
// console.log(getArray(2, 3).map((item) => item.length())) // number类型没有length属性
