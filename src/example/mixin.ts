/* 混入就是把两个类或者方法的内容混合到一起，从而实现类或者方法的复用 */

// 对象混入

interface ObjectA {
  a: string
}
interface ObjectB {
  b: string
}
let Aa: ObjectA = {
  a: "a",
}
let Bb: ObjectB = {
  b: "b",
}

let AB: ObjectA & ObjectB = Object.assign(Aa, Bb)
console.log(AB) // {a: 'a', b: 'b'}

// 类混入
