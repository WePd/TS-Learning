const profile = {
	name: "lqy",
	age: 22,
	cores: {
		lat: 0,
		lng: 7,
	},
	setAge(age: number): void {
		this.age = age
	}
}

// const age = profile.age
const {age}: { age: number } = profile


// Array

const list: (string | Date | number)[] = ['lqy', new Date()] // 灵活设置数组类型
list.push(100)


//元组
//可以在类似数组的结构中放入不同的类型

const items: (number | string | boolean)[] = [23, 'red', false] // 但是这样写有个我呢提那就是里面的元素顺序是可以变更的

//若是不想变更可以这样写

type item = [number, string, boolean]

const items2: item = [23, 'red', true]

// items2[0]= items2[1]

/*
interface和type的区别：

相同点：
	1. 都可以描述一个对象或者一个函数
	2. 都是允许拓展的(extends)
	 interface entends interface
	 type entends type
	 interface extends type
	 type entends interface
	 
不同点：
	type可以声明基本类型别名，联合类型， 元组等
	type语句中还可以使用typeof获取实例的类型进行赋值
	interface可以声明合并
*/


// Class
/*
* public: 公共的
* private: 只能被类中的其他方法调用
* prevent:
* */
