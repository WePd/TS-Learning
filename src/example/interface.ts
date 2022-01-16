// 不使用接口
/**
 * @description
 * @param {{ firstName: string; secondName: string }} { firstName, secondName }
 * @return {*}  {string}
 */
// const getFullName = ({ firstName, secondName }: { firstName: string; secondName: string }): string => {
// 	return `${firstName} ${secondName}`
// }

// console.log(getFullName({ firstName: "li", secondName: "qq" }))

// 使用接口
interface NameInfo {
  firstName: string
  secondName: string
}

const getFullName = ({ firstName, secondName }: NameInfo): string => {
  return `${firstName} ${secondName}`
}

// tslint:disable-next-line: no-console
console.log(getFullName({ firstName: "li", secondName: "qq" }))

// 2. 若是有的属性肯不需要传递的时候可以使用接口检测

// const getVageTable = ({ color, type }: { color: string; type: string }) => {
// 	return `a ${color ? color : ""} ${type}`
// }
// 这是在两个参数都传入的情况下
// console.log(getVageTable({ color: "red", type: "tomato" }))

// 从上面的例子看我们可以不传入第一个参数

// interface Vagetable {
// 	color?: string
// 	type: string
// }
// const getVageTable = ({ color, type }: Vagetable) => {
// 	return `a ${color ? color : ""} ${type}`
// }

// console.log(getVageTable({ type: "tomato" })) // a  tomato

// 三 在不影响程序运行的情况下可以多传参数
// 有三种方法可以实现： 1. 类型断言
// interface Vagetable {
// 	color: string
// 	type: string
// 	[prop: string]: any
// }
// const getVageTable = ({ color, type }: Vagetable) => {
// 	return `a ${color ? color : ""} ${type}`
// }
// 1.类型断言
// console.log(getVageTable({ type: "tomato", color: 'red',  size: 'big' } as Vagetable)) // a  tomato

// 2. 索引签名  [prop: string]: any
// console.log(getVageTable({ type: "tomato", color: "red", size: "big" })) // a  tomato

// 3.类型兼容性

// interface Vagetable {
// 	color: string
// 	type: string
// }
// const getVageTable = ({ color, type }: Vagetable) => {
// 	return `a ${color ? color : ""} ${type}`
// }

// const vagetable = { type: "tomato", color: "red", size: "big" }
// console.log(getVageTable(vagetable)) // a  tomato

// 四 设置只读属性
interface Vagetable {
  color?: string
  readonly type: string
}

let vagetable: Vagetable = {
  type: "tomato",
}
// type属性不能修改
// vagetable.type = "carront"

// 数组只读
interface ArrInter {
  0: string
  readonly 1: number
}

// let arr: ArrInter = [123] //报错
let Arr: ArrInter = ["lqy", 25]
// 无法修改只读属性
// Arr[1] = 22

// 五，接口定义函数的结构
type AddFunc = (num1: number, num2: number) => number

// const add: AddFunc = (n1, n2) => n1 + n2 // 返回数字
// const add: AddFunc = (n1, n2) => `${n1} ${n2}` // error

// 六. 指定索引类型
interface RoleDic {
  [id: number]: string
}
const roledic: RoleDic = {
  // 0: 'lqy'
  // 'name': 'lqy' // error
}

// 七， 接口的继承 可以提高接口的可复用性
interface Man {
  speaking: string
}

interface Teacher extends Man {
  teach: string
}

interface Coder extends Man {
  code: string
}

const MathTeacher: Teacher = {
  speaking: "chinese",
  teach: "Math",
}

const code: Coder = {
  speaking: "English",
  code: "Javascript",
}

// 混合类型接口
interface Count {
  (): void
  count: number
}

const getCount = (): Count => {
  const c = () => {
    c.count++
  }
  c.count = 0
  return c
}

const counter: Count = getCount()
counter()
console.log(counter.count)
counter()
console.log(counter.count)
counter()
console.log(counter.count)
