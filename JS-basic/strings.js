const string = "The revolution will not be televised.";
console.log(string);

//Using backtick (``) to wrap strings
let backtick = `Backtick`;
console.log(backtick); 

//Template literal
//Embed JavaScript in a template literal
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting);

const string1 = "Hello,";
const string2 = "how are you?";
const joinedString = `${string1} ${string2}`;
console.log(joinedString);

//Multiline strings
//Using template literals
const newline = `One day you finally knew
what you had to do, and began`;
console.log(newline);

//Using line break characters (\n)
const sentence = "One day you finally knew\nwhat you had to do, and began.";
console.log(sentence);

//Including quotes in strings
const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm going in there!"`;
console.log(goodQuotes1);
console.log(goodQuotes2);

//Using escape to add quotes in strings
const bigMouth = 'I\'ve got no right to take my place...';
console.log(bigMouth);

//Converting other data types to a number
//Use Number() function
const stringExample = "123";
const toNumber = Number(stringExample);
console.log(typeof toNumber);

//Converting other data types to a string
//Use String() function
const num1 = 123;
const tostring = String(num1);
console.log(typeof tostring);

//Return the length of a string
//Use length property
let text = "This is a text";
let length = text.length;
console.log(length);

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

//Extracting string
//Using slice()
//Extracts a part of a string and returns the extracted part in a new string.
let fruits = "Apple, Banana, Kiwi";
let part = fruits.slice(7, 13);
console.log(part);

//Using substring()
//Start and end values less than 0 are treated as 0 in substring().
let extractedFruits = fruits.substring(7, 13);
console.log(extractedFruits);

//Using substr()
//The second parameter specifies the length of the extracted part.
let subFruits = fruits.substr(7, 6);
console.log(subFruits);

//Converting string to upper and lower case
//Convert string to upper case use toUpperCase()
let hello = "Hello, World";
let upperHello = hello.toUpperCase();
console.log(upperHello);

//Convert string to lower case use toLowerCase()
let lowerHello = hello.toLowerCase();
console.log(lowerHello);

//Joining two or more strings
//Use concat()
let hi = "Hi";
let world = "World";
let joinedWords = hi.concat(" ", world);
console.log(joinedWords);

//Removing whitespace from both sides of a string
let uncleanSentence = "     Too much whitespaceeee ahhhh!!     ";
let cleanSentence = uncleanSentence.trim();
console.log(cleanSentence);

//Removing whitespace only on the start of the string
let startOnlyClean = uncleanSentence.trimStart();
console.log(startOnlyClean);

//Removing whitespace only on the end of the string
let endOnlyClean = uncleanSentence.trimEnd();
console.log(endOnlyClean);

//String Padding
//padStart() pads a string from the start
let sample = "yo";
let padded = sample.padStart(4, "E");
console.log(padded);

//padEnd() pads a string from the end
let paddedEnd = sample.padEnd(4, "o");
console.log(paddedEnd);

//Both padding methods are string methods
//To pad a number, convert the number to a string first
let num = 5;
let numToString = num.toString();
let paddedNumber = numToString.padStart(4, "0");
console.log(paddedNumber);

//Repeat a string
let singleText = "This is a single text.";
let repeatedText = singleText.repeat(2);
console.log(repeatedText);

//Replacing string content
let originalText = "Please visit Microsoft!";
let newText = originalText.replace("Microsoft", "W3Schools");
console.log(newText);

//Using replaceAll()
let textSample = "I love cats. Cats are very easy to love. Cats are very popular.";
textSample = textSample.replaceAll("Cats", "Dogs");
textSample = textSample.replaceAll("cats", "dogs");
console.log(textSample);

//Converting string to array
let letters = "a, b, c, d, e, f";
const myArray = letters.split(",");
console.log(myArray);