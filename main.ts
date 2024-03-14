// logical operators

// 1 : And && operator...  

var num1 : number = 5
var num2 : number = 6

console.log(num1 == 6 && num2 == 5)

// answer is false 

console.log(num1 == num2 && num2 == 6)

// answer is false 

console.log(num1 + 1 == num2 && num2 -1 == num1)

// answer is true

console.log(num1 == 10 - 5 && num2 == 2 * 3 )

// answer is true

// 2 : OR || operaator...

let num3 : number = 3
let num4 : number = 4 

console.log(num3 == 4 || num4 == 4)

// answer is true 

console.log(num3 == num4 || num4 == 3)

// answer is false 

console.log(num3 + 1 == num4 || num3 == num4 - 1)

// answer is true

console.log(num3 == num4 || num4 -1 == num3)

// answer is true 

let num5 : number = 5
let num6 : number = 6 

console.log(!(num5 = 5))

// answer is false

console.log(!(num5 == 8 && num6 == 9))

// answer is true

console.log (!(num5 == 5 && num6 == 6 ))

//answer is false 

console.log(!(num5 == 7 || num6 == 6 ))

// answer is false 
