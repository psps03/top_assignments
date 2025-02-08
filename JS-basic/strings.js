// const string = "The revolution will not be televised.";
// console.log(string);

// //Using backtick (``) to wrap strings
// let backtick = `Backtick`;
// console.log(backtick); 

// //Template literal
// //Embed JavaScript in a template literal
// const name = "Chris";
// const greeting = `Hello, ${name}`;
// console.log(greeting);

// const string1 = "Hello,";
// const string2 = "how are you?";
// const joinedString = `${string1} ${string2}`;
// console.log(joinedString);

// //Multiline strings
// //Using template literals
// const newline = `One day you finally knew
// what you had to do, and began`;
// console.log(newline);

// //Using line break characters (\n)
// const sentence = "One day you finally knew\nwhat you had to do, and began.";
// console.log(sentence);

// //Including quotes in strings
// const goodQuotes1 = 'She said "I think so!"';
// const goodQuotes2 = `She said "I'm going in there!"`;
// console.log(goodQuotes1);
// console.log(goodQuotes2);

// //Using escape to add quotes in strings
// const bigMouth = 'I\'ve got no right to take my place...';
// console.log(bigMouth);

// //Converting other data types to a number
// //Use Number() function
// const stringExample = "123";
// const toNumber = Number(stringExample);
// console.log(typeof toNumber);

// //Converting other data types to a string
// //Use String() function
// const num = 123;
// const tostring = String(num);
// console.log(typeof tostring);

// //Return the length of a string
// //Use length property
// let text = "This is a text";
// let length = text.length;
// console.log(length);

//Extracting characters from a string
//Using charAt()
let sampleText = "Hello World";
let char = sampleText.charAt(0);
console.log(char);

//Using charCodeAt()
let charCode = sampleText.charCodeAt(0);
console.log(charCode);

//Using at()
//Allows the use of negative indexes while charAt() do not
let sampleText2 = "This is another text.";
let letter = sampleText2.at(2);
console.log(letter);
let lastLetter = sampleText2.at(-2);
console.log(lastLetter);

//Using property access []
console.log(sampleText2[3]);