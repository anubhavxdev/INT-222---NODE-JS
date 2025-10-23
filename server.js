console.log("Server is starting...");

// Simple addition operation
var a = 7;
var b = 5;
var sum = a + b;
console.log("The sum of " + a + " and " + b + " is: " + sum);


//REPL - Read-Eval-Print Loop
// To use REPL, run `node` in your terminal and type JavaScript code directly.
// Example: Type `console.log("Hello from REPL!");` and press Enter to see the output.
// You can exit REPL by typing `.exit` or pressing Ctrl+C twice.
//example:-
console.log("Hello from REPL!");
console.log("You can type JavaScript code directly in the REPL.");



//Mulli-line expressions
var ax = 10;
var bx = 20;
if (ax < bx) {
    console.log(ax + " is less than " + bx);
} else if (ax > bx) {
    console.log(ax + " is greater than " + bx);
} else {
    console.log(ax + " is equal to " + bx);
}

//command to use .save in REPL
// In REPL, you can save your session to a file by typing `.save filename.js` and pressing Enter.
// Example: `.save mySession.js` will save your current REPL session to a file named `mySession.js`.
// To load a saved file in REPL, you can use the `.load filename.js` command.
// Example: `.load mySession.js` will load and execute the code from `mySession.js` in your current REPL session.
// You can exit REPL by typing `.exit` or pressing Ctrl+C twice.


//class 2:-

//what is modules?
// Modules in Node.js are reusable pieces of code that can be imported and used in other files.
// They help in organizing code and managing dependencies.
// Example: You can create a module in a file named `math.js` and export functions like addition and subtraction.
// Then, you can import and use these functions in another file using `require('./math')`.

//types of modules
// 1. Core Modules: Built-in modules that come with Node.js, such as `fs`, `http`, and `path`.
// 2. Local Modules: Custom modules created by you in your project.
// 3. Third-Party Modules: Modules installed from npm (Node Package Manager), such as `express`, `lodash`, etc.