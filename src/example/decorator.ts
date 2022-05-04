/*
以下就是一个装饰器工厂函数
它返回一个函数，在装饰器运行时调用
*/
// function setName() {
//   console.log("get setName")
// 装饰器
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
//
// get setAge
// decorator.ts:9 get setName
// decorator.ts:11 setName
// decorator.ts:17 setAge
// @setAge()  // 必须返回一个函数， 会在运行时被调用，被装饰的声明信息作为参数传入
// @setName()
// class People {}

// 在TypeScript里，当多个装饰器应用在一个声明上时会进行如下步骤的操作：
// 由上至下依次对装饰器表达式求值。
// 求值的结果会被当作函数，由下至上依次调用。

// 类装饰器
let sign = null

function setName(name: string) {
  return (target: new () => any) => {
    sign = target
    console.log(target.name)
  }
}

@setName("lqy") // 类装饰器在类声明之前被声明， 用来监视、修改或者替换类定义
class People {
  constructor() {} // 装饰器的唯一参数就是类的构造函数
}
console.log(sign === People) // true
console.log(sign === People.prototype.constructor) // true
console.log(sign) //
// console.log(People)

//方法装饰器
/*
声明在一个方法之前

在运行时被当作函数调用，会传入三个参数：
1.对于静态成员来说时类的构造函数，对于实例成员来说是类的原型
2.成员的名字
3.成员的属性描述符

如果方法装饰器返回一个值，它会被用作方法的属性描述符。
 */
