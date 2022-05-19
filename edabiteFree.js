//Free trial did not last that long. I plan to log into a differnt account and be more selctive with the problems.

//Very Easy
//1
function hello() {
	return "hello edabit.com"
}
//2
function addition(a, b) {
	return a + b
}
//3
function convert(minutes) {
	return minutes * 60
}
//4
function addition(num) {
	return num + 1
}
//5
function triArea(base, height) {
	return (base * height) / 2
}
//6
function calcAge(age) {
	return age * 365
}
//7
function cubes(a) {
	return a ** 3
}
//8
function getFirstValue(arr) {
	return arr[0]
}
//9
function findPerimeter(length, width) {
	return (length * 2) + (width * 2)
}
//10
function howManySeconds(hours) {
	return (hours * 60) * 60
}
//11
function giveMeSomething(a) {
	return "something" + " " + a
}
//12
function remainder(x, y) {
	return x % y
}
//13
function nameString(name){
	var b = "Edabit"
	var result = name + b
  	return result
}
//14
function points(twoPointers, threePointers) {
	return (twoPointers *2) + (threePointers * 3)
}

//Easy
//1
function matchHouses(step) {
	if (step === 0) {
		return step;
	} else {
		return (step * 5) + 1;
}
}

//2
function minMax(arr) {
	return [Math.min(...arr), Math.max(...arr)]
}

//3
function whichIsLarger(f, g) {
	if (f() > g()) {
		return "f"
	} else if (g() > f()) {
		return "g"
	} else {
		return "neither"
	}
}

//Medium
//1
function countTrue(arr) {
	return arr.filter(arr => arr === true).length;
}

//2
function redundant(str) {
	return function() {
		return str
	}
}

//3
function countTrue(arr) {
	let numTrue = 0;
	
	for (let i = 0; i < arr.length; i++){
		if (arr[i] == true){
			numTrue++;
		}
	}
	return numTrue
}
