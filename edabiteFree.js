//Free trial did not last that long, I used two accounts to get harder practice in.

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
//1 Taking an input that increases by 5 every step with step one starting at 6
function matchHouses(step) {
	if (step === 0) {
		return step;
	} else {
		return (step * 5) + 1;
	}
}

//2 Returns the min value and the max value in an array
function minMax(arr) {
	return [Math.min(...arr), Math.max(...arr)]
}

//3 Returning which value is larger
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
//1 Practice making a function within a function which returns the same value that was input
function redundant(str) {
	return function() {
		return str
	}
}

//2 Counting the number of true values in an array
function countTrue(arr) {
	return arr.filter(value => value === true).length;
}


//2 Counting the number of true values without using the .filter() and practicing loops
function countTrue(arr) {
	let numTrue = 0;
	
	for (let i = 0; i < arr.length; i++){
		if (arr[i] == true){
			numTrue++;
		}
	}
	return numTrue
}
