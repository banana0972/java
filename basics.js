let x = 2
x = 1

let a = [4, 5]

const wontChange = 2


let r = Math.random()
let f = Math.round(123.456)
let g = Math.cos(Math.PI)
let h = Math.E ** 2

let firstName = "Tay"
let lastName = "Jonny"
let fullName = firstName + lastName
let nameLength = fullName.length

console.log(fullName, nameLength)

console.log(firstName[0])
console.log(lastName.substring(0, 3))
console.log(firstName.toUpperCase())

let age = 13
if (age < 12) {
    console.log("hello")
} else if (age < 20) {
    console.log("Hi teen")
} else {
    console.log('):')
}

ls = ["apple", 'banana', 'watermelon', 'pear']

for (let i = 0; i < ls.length; i++) {
    console.log(ls[i])
}

for (let fruit of ls) {
    console.log(fruit)
}

let c = 10
while (c >= 0) {
    console.log(c)
    c--
}

