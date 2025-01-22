// Console
/* 
It's an object in JavaScript with its methods
clg → console.log
 log → console.log
*/

// --------

// Varibles
/* 
(reserved keyword) + (variable name) + (type of value)
reserved keywords: var, let, const

let: mutable, can be changed, scope: block-scoped (only accessible inside {} where it's declared)
const: immutable, cannot be changed, scope: block-scoped like let
var: mutable, can be changed: scope: function-scoped or global scope if declared oustide any {}

Declare: let name
Assign Value: name = "Jay"
Shorthand: let name = "Jay"
Reassign: name = "Tin" (not applicable to const)
*/

/* Challenge 1:
1. Declare a variable called 'name' and store your name in it.
2. Create a variable called 'intentions' and store yours in it.
3. Create a variable called 'gender' and store yours in it.
4. Log all

let name = "Tin";
let intentions = "Become a full stack developer";
let gender = "Male";
console.log(name, intentions, gender);
*/

// --------

// Data Primitive Types
/* 
    1. Number
    2. String
    3. Boolean
    4. Null
    5. Undefined
    6. Symbol
    7. BigInt
*/
/* 
    1. Number
    let num = 10;

        // Basic Math Operators (+, -, *, /, %, **)
        let num = 10 + 20;
        console.log(num3);

        // Increment / Decrement Operators (++, --)
        let x = 5;
        console.log(++x); // Prefix: x is incremented first, then used. Output: 6
        console.log(x++); // Postfix: x is used first, then incremented. Output: 6
        console.log(x);   // Now x is 7

        // NaN
        console.log(number + undefined); // NaN

    2. String
    let str = "Hello";  // Can be also '', ``
    
        // String Concatenation
        let str = "Hello";
        let str2 = "World";
        console.log(str + " " + str2);

        // String Interpolation
        let name = "Tin";
        let age = 20;
        console.log(`My name is ${name} and I'm ${age} years old.`);

        // Escape Sequences
        let str = "Hello \nWorld";
        console.log(str);

        // String Length
        let str = "Hello World";
        console.log(str.length);

        // String Methods
        let str = "Hello World";

            // Uppercase & Lowercase
            console.log(str.toUpperCase());
            console.log(str.toLowerCase());

            // String Slicing
            console.log(str.slice(0, 5));                       // "Hello"
            console.log(str.slice(-5));                         // "World"

            // String Replacement
            console.log(str.replace("World", "Universe"));      // "Hello Universe"

            // String Split
            console.log(str.split(" "));                        // ["Hello", "World"]

            // String Searching
            console.log(str.charAt(0));                         // "H"
            console.log(str.charCodeAt(0));                      // 72
            console.log(str.indexOf("W"));                       // 4
        
            // String Join
            console.log(str.join(" "));                         // "Hello World"

            // Includes
            console.log(str.includes("World"));                 // true

            // String Trimming
            let str2 = "   Hello World   ";
            console.log(str.trim());                             // "Hello World"
            console.log(str.trimStart());                        // "Hello World   "
            console.log(str.trimEnd());                          // "   Hello World"

            // String Apendding
            let str = "Hello";
            str += " World";
            console.log(str);

    3. Boolean
    let isTrue = true

        // Falsy Values
        let falsy = false;
        let falsy = 0;
        let falsy = -0;
        let falsy = "", '', ``;
        let falsy = null;
        let falsy = undefined;
        let falsy = NaN;

        // Truthy Values
        let truthy = true;
        let truthy = 1;
        let truthy = "Hello";
        let truthy = [];
        let truthy = {};

    4. Null
    let null = null;

    5. Undefined
    let undefined = undefined;

        // Undefined vs Null
        undefined: A variable that has been declared but not assigned a value yet. The JS engine set it.
            let game; // game -> undefined
        null: Represents the intentional absense of value set by the developer explicitly.
            let game = null; // game -> null, set explicitly by us
        console.log(undefined == null);  // true (loose equality)
        console.log(undefined === null); // false (strict equality)

    6. Symbol
    let symbol = Symbol();

    7. BigInt
    let largeNumber = BigInt(9007199254740991);
*/

/* Challenge 2:
    // 1. Create Variable name (firstFavNum) & store your favorite number.
    // 2. Create Variable name (secondFavNum) & store your second favorite number.
    // 3. Add (firstFavNum & secondFavNum).
    // 4. Subtract (firstFavNum & secondFavNum).
    // 5. Multiply (firstFavNum & secondFavNum).
    // 6. Divided (firstFavNum & secondFavNum).
    // 7. Check (firstFavNum Mod secondFavNum).
    // 8. Check the power of (firstFavNum).

    let firstFavNum = 3;
    let secondFavNum = 9;

    console.log(firstFavNum + secondFavNum);
    console.log(firstFavNum - secondFavNum);
    console.log(firstFavNum * secondFavNum);
    console.log(firstFavNum / secondFavNum);
    console.log(firstFavNum % secondFavNum);
    console.log(firstFavNum ** secondFavNum);
*/

/* Challenge 3:
    1. Create a variable called 'isJSProgrammingLanguage' and store true as value.
    2. Create a var called 'isJSHard' and store false a value.
    3. Create a var called 'favNum' and store yours.
    4. Add favNum with undefined

    let isJSProgrammingLanguage = true;
    let isJSHard = false;
    let favNum = 3;
    console.log(favNum + undefined); // NaN
*/

/* Challenge 5:
    let favActorFirstName = "Tom";
    let favActorLastName = "Hanks";
    let fullName = favActorFirstName.concat(" ", favActorLastName);
    console.log(fullName);

    let uppercase = fullName.toUpperCase();
    let message = `${uppercase} is my favorite actor.`;
    message.append(" ", "his best movie was 'Forrest Gump'.");
    console.log(message);
*/

// --------

// Convert Data Types
/* 
    1. Number to String
    let num = 10;
    let str = String(num);
    let str = num.toString();
    console.log(str);

    2. String to Number
    let str = "10";
    let num = parseInt(str);
    let num = Number(str);
    num = +num
    console.log(num);

    3. String to Decimal
    let str = "10.522";
    let num = parseFloat(str);
    console.log(num); // 10.522
*/

// --------

// Data Non-Primitive Types
/* 
    1. Array
    let arr = [1, 2, 3, 4, 5];

    2. Object
    let obj = {
        name: "Tin",
        age: 20,
    };

    3. Function
    let func = function () {
        console.log("Hello");
    };
*/

// --------

// Operators
/* 
    1. Arithmetic Operators
        +, -, *, /, %
    2. Assignment Operators
        =, +=, -=, *=, /=
    3. Comparison Operators
        
        Equality Operators
        ==, != (loose, value compare), ===, !== (strict, value + type compare)
        
        10 == "10" // true
        10 === "10" // false

        Relational Operators
        >, <, >=, <=

    4. Logical Operators
        &&, ||
    5. Bitwise Operators
        &, |
    6. Ternary Operators
        condition ? true : false
    7. Unary Operators
        ++, --
    8. Update Operators
        +=, -=, *=, /=
    9. Nullish Coalescing Operator
        ??
*/

/* Challenge 4:
    let favFirstNum = 3
    let favSecondNum = 9
    console.log(favFirstNum > favSecondNum);    // false
    console.log(favFirstNum < favSecondNum);    // true
    console.log(favFirstNum >= favSecondNum);   // false
    console.log(favFirstNum <= favSecondNum);   // true
    console.log(favFirstNum == favSecondNum);   // false
    console.log(favFirstNum != favSecondNum);   // true
    console.log(favFirstNum === favSecondNum);  // false
    console.log(favFirstNum !== favSecondNum);  // true
*/
