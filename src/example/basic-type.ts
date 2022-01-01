// 布尔类型
let flag: boolean = true

// 数值类型 支持二进制， 八进制的值
let num: number = 123
num = 0x111111
num = 0o222
num = 0x22

// 字符转
let str: string = "123"

str = "abc"
//支持模板字符串
str = `数值是${num}`
console.log(str)

//数组类型
let arr: number[] = [1]

let arr2: Array<number> = [2]

//联合写法
let arr3: (string | number)[] = ["123", 222]

//元组类型 ---------> 有限制的数组, 个数类型要一一对应
let tuple: [string, number, number] = ["123", 1, 2]

//枚举类型
enum Types {
	SUPER_VIP, //可以设置默认的序号，然后后面依次递增
	VIP,
	NOMAL,
}

console.log(Types.SUPER_VIP) // 0
console.log(Types.VIP) // 1
console.log(Types.NOMAL) // 2
console.log(Types[2]) // NOMAL

//any类型 定义any类型的值可以赋值为任何类型
let value: any
value = 1
value = "1"
value = false
value = [123, "123"]

// void类型。   对于vode， 可以将nullundefined复制给void
const test = (message: string): void => {
	//这个函数没有返回任何值，则就可以设置为void
	console.log(message)
}

//null和undefined  是其他类型的子类型

let u: undefined
u = undefined
// u = 123 报错

let n: null
n = null
// n = 123 报错， 只能赋值为null

// never类型  永远不存在值的类型
// never可以赋值给任何类型，但任何类型都不能复制为Never
const errFunc = (msg: string): void => {
	throw new Error(msg)
}

// Object类型
/**
 * @description
 * @param {object} OBJ
 */
function getObj(OBJ: object) {
	console.log(OBJ)
}
let obj = {
	name: "lqy",
}
// getObj(123) error
getObj(obj)

/**
 * @description 类型断言 像是一种类型转换，通过自定义语法，强制把一种类型转换为我们想要的类型
 * @param {(string | number)} target
 * @return {*}  {number}
 */
const getLength = (target: string | number): number => {
	if ((<string>target).length || (target as string).length === 0) {
		return (target as string).length
	} else {
		return target.toString().length
	}
}
getLength(123)
getLength("123")
