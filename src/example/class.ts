class Point {
	public x: number
	public y: number
	
	constructor(x: number, y: number) {
		this.x = x
		this.y = y
	}
	
	public getPosition() {
		return `${this.x}, ${this.y}`
	}
}

const position = new Point(1, 2)
console.log(position)
