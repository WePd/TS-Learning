// function setName() {
//   console.log("get setName")
//   return (target: any) => {
//     console.log("setName")
//   }
// }

// function setAge() {
//   console.log("get setAge")
//   return (target: any) => {
//     console.log("setAge")
//   }
// }
// 先会按顺序执行装饰器工厂，然后再按相反的顺序执行装饰器
// get setAge
// decorator.ts:9 get setName
// decorator.ts:11 setName
// decorator.ts:17 setAge
// @setAge()
// @setName()
// class People {}

// 类装饰器

let sign = null

function setName(name: string) {
  return (target: new () => any) => {
    sign = target
    console.log(target.name)
  }
}

@setName("lqy")
class People {}
console.log(sign === People) // true
console.log(sign === People.prototype.constructor) // true
