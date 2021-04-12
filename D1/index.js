/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
console.log("----------E1----------")

const sum = (x, y) => {
	const total = x + y
	if (x === y) return total * 3
	return total
}

console.log(sum(5, 5))

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
console.log("----------E2----------")

const check = (x, y) => {
	if (x === 50 || y === 50 || x + y === 50) return true
	return false
}

console.log(check(50, 40))

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
console.log("----------E3----------")

const remove = (n) => {
	const string = "The quick brown fox jumped over the lazy dog"
	const strArray = Array.from(string)
	strArray.splice(n, 1)
	return strArray.join("")
}

console.log(remove(0))

/*
4)
 Create a function to find the largest of three given integers.
*/
console.log("----------E4----------")

const largest = (x, y, z) => {
	return Math.max(x, y, z)
}
console.log(largest(6, 7, 6))

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
console.log("----------E5----------")

const inRange = (x, y) => {
	if (60 >= x && y >= 40) return "In range 40-60"
	if (100 >= x && y >= 70) return "In range 70-100"
	return "Not in range"
}
console.log(inRange(70, 70))

/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/
console.log("----------E6----------")
const createCopies = (n) => {
	const copyMe = "Copy this string. "
	return copyMe.repeat(n)
}
console.log(createCopies(5))

/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
console.log("----------E7----------")

const checkCity = (n) => {
	if (n.startsWith("Los")) return n
	if (n.startsWith("New")) return n
	return "blank"
}
console.log(checkCity("new York"))
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
console.log("----------E8----------")


const findSum = (n) => {
	return n[0] + n[1] + n[2]
}
console.log(findSum([1, 2, 3]))

/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
console.log("----------E9----------")
const is1or2 = (n) => {
	if ((n[0] || n[1]) === (1 || 2)) return true
	return false
}
console.log(is1or2([0, 0]))
// 10)
// Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
console.log("----------E10----------")
const isNot1or2 = (n) => {
	if ((n[0] || n[1]) === (1 || 2)) return false
	return true
}
console.log(isNot1or2([0, 0]))
// 11)
// Create a function to find the longest string from a given array of strings.
console.log("----------E11----------")
let longOne = ""
const longest = (n) => {
	for (i = 0; i < n.length; i++) {
		if (n[i].length > longOne.length) {
			longOne = n[i]
		}
	}
	return longOne
}
console.log(longest(["one", "three", "four", "five", "six", "sevenenen"]))

// 12)
// Create a function to find the types of a given angle.

// Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     btuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.
console.log("----------E12----------")

const angle = (n) => {
	if (0 < n && n < 90) return "Acute angle"
	if (90 < n && n < 180) return "Obtuse angle"
	if (n === 90) return "Right angle"
	if (n === 180) return "Straight Line"
}

console.log(angle(1))
// 13)
// Create a function to find the index of the greatest element of a given array of integers
console.log("----------E13----------")
const greatest = (n) => {
    return n.indexOf(Math.max(...n))
}
console.log(greatest([1,2,3,4,5,6,7,8,9]))
// 14)
// Create a function to get the largest even number from an array of integers.

const largestEven = (n => {
})

// 15)
// Create a function to check from two given integers, whether one is positive and another one is negative.

// 16)
// Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case.

// 17)
// Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

// 18)
// Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

// If the number has 3 as a factor, output 'Diego'.
// If the number has 5 as a factor, output 'Riccardo'.
// If the number has 7 as a factor, output 'Stefano'.
// If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
// Examples
// 28's factors are 1, 2, 4, 7, 14, 28.
// this would be a simple "Stefano".
// 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
// this would be a "DiegoRiccardo".
// 34 has four factors: 1, 2, 17, and 34.
// this would be "34".

// 19)
// Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
