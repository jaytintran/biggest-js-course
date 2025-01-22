/* 
Control flow simply is ways to control the flow of the program, how the program will be executed.
if (condition) {
    // do something
}
*/

// If-Else
/* 
    if (condition) {
        // do something
    } else {
        // do something else
    }

    if (condition) {
        // do something
    } else if (condition) {
        // do something else
    } else {
        // do something else
    }

    let a = 10;
    let b = 20;
    if (a > b) {
        console.log("a is greater than b");
    } else {
        console.log("b is greater than a");
    }

    let time = 20;
    let greeting;
    if (time < 10) {
        greeting = "Good morning";
    } else if (time < 20) {
        greeting = "Good afternoon;
    } else {
        greeting = "Good evening";
    }

*/
/* Challenge 1:
let password = "abc12345";
if (!password) {
    console.log("Please provide a password");
} else if (password.length === 8) {
    console.log("Password is correct");
} else if (password.length < 8) {
    console.log("Password is too short");
} else {
    console.log("Password is too long");
}

*/

// --------------------------------------

// Switch
/* 
    switch (expression) {
        case value1:
            // do something
            break;
        case value2:
            // do something
            break;
        default:
            // do something
            break;
    }

    let day = "Monday";
    switch (day) {
        case "Monday":
            console.log("It's Monday");
            break;
        case "Tuesday":
            console.log("It's Tuesday");
            break;
        case "Wednesday":
            console.log("It's Wednesday");
            break;
        case "Thursday":
            console.log("It's Thursday");
            break;
        case "Friday":
            console.log("It's Friday");
            break;
        case "Saturday":
            console.log("It's Saturday");
            break;
        case "Sunday":
            console.log("It's Sunday");
            break;
        default:
            console.log("It's not a day");
    }
*/

// --------------------------------------

// Loops
/* 
    1. For Loops
    2. While Loops
    3. Do-While Loops
    4. For-Of Loops
    5. For-In Loops

    1. For Loops
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }

    2. While Loops
    let i = 0;
    while (i < 10) {
        console.log(i);
        i++;
    }

    3. Do-While Loops
    let i = 0;
    do {
        console.log(i);
        i++;
    } while (i < 10);

    4. For-Of Loops
    let arr = [1, 2, 3, 4, 5];
    for (let num of arr) {
        console.log(num);
    }

    5. For-In Loops
    let obj = {
        name: "Tin",
        age: 20,
    };
    for (let key in obj) {
        console.log(key);
    }
*/

// ----------------------------

// Logical Operators
/* 
    1. Logical AND (&&)
    2. Logical OR (||)
    3. Logical NOT (!)
    4. Logical XOR
    5. Logical Nullish Coalescing Operator (??)

    1. Logical AND (&&)
    // Return true if both of theconditions are true, false if at least one is false

    // Example if a person lives in the US and is older than 18
    let isUSCitizen = true;
    let age = 20;
    if (isUSCitizen && age > 18) {
        console.log("You are eligible to vote");
    }

    2. Logical OR (||)
    // Return true if at least one condition is true, false if both are false

    // Example if a person is either > 18 years old or having a parent permission 
    let age = 20;
    let parentPermission = true;
    if (age > 18 || parentPermission) {
        console.log("You are eligible to vote");
    }
    

    3. Logical NOT (!) 
    // Return true if condition is false
    let isUSCitizen = true;
    if (!isUSCitizen) {
        console.log("You are not eligible to vote");
    }

    4. Logical XOR
    // Return true if only one condition is true
    let gender = "male";
    let age = 20;
    if (gender === "male" ^ age > 18) {
        console.log("You are eligible to vote");
    }
*/

// ----------------------------

// Ternary Operators
/* 
    condition ? true : false

    // Syntax: condition ? trueValue : falseValue
    let age = 20;
    let canVote = age >= 18 ? "Yes, you can vote" : "No, you cannot vote";
    console.log(canVote); // Output: "Yes, you can vote"
*/

// ----------------------------

// Nullish Coalescing Operator
/* 
    ?? is a nullish coalescing operator that returns the second operand if the first operand is null or undefined, otherwise it returns the first operand.

    let a = null;
    let b = 10;
    let c = a ?? b;
    console.log(c); // Output: 10
*/

// ----------------------------

// Optional Chaining
/* 
let user = {
    name: "Tin",
    address: {
        city: "Vinh Long"
    }
};

console.log(user.address?.city); // Safe access, outputs "Vinh Long"
console.log(user.contact?.phone); // Undefined, no error thrown
*/
