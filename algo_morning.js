/* 
	ACRONYMS
	Create a function that, given a string, returns the string’s acronym 
	(first letter of each word capitalized). 
	Do it with .split first if you need to, then try to do it without
*/

const str1 = " there's no free lunch - gotta pay yer way. ";
const expected1 = "TNFL-GPYW";

const str2 = "Live from New York, it's Saturday Night!";
const expected2 = "LFNYISN";
const str3 = "San Francisco"
const str4 = "Los Angeles"
const str5 = "New York"

function acronymize(str) {
	let acronym = "";
	if (str[0] !== " ") {
		acronym += str[0].toUpperCase();
	}
	for (let i = 0; i < str.length-1; i++) {
		if (str[i] === " " && str[i+1] !== " ") {
			acronym += str[i+1].toUpperCase();
		}
	}
	return acronym
}
console.log(acronymize(str2))
console.log(acronymize(str1))
console.log(acronymize(str3))
console.log(acronymize(str5))
console.log(acronymize(str4))

/*****************************************************************************/

/* 
	String: Reverse
	Given a string,
	return a new string that is the given string reversed
*/

// const str1 = "creature";
// const expected1 = "erutaerc";

// const str2 = "dog";
// const expected2 = "god";

// function reverseString(str) {
	// make a new string
	// add to it the reversed letters
// }

 // var newString = str.split(" ");
    // for (var i = 0; i < newString.length; i++) {
    //     var newArray = [];
    //     // newString.toUpperCase();
    //     newArray.push(newString[i][0]);
    // }
    // console.log(newArray);
	// .split() which will split up a string by a splitter
	// var str = "Hello There"
	// var arr = str.split(" ") -> ["Hello", "There"]
	// console.log(str[0]) -> "H"
	// console.log(arr[1][0]) -> "T"
	// Loop through the string
	// Grab the first character of each word
	// add it to a new string
	// capialize the new string

// function acronymize(str) {
   
//     var acronym = "";
//     var wordsArr = str.split(" ");
//     for (var i = 0; i < wordsArr.length; i++) {
//         acronym += wordsArr[i][0].toUpperCase();
//     }
//     return acronym;
// }