// to display or make a copy content of one or more files in the terminal

// General Syntax:
// wcat [options] [files]
// option to remove big line break (-s)
// option to add line number to non empty lines (-b)
// option to add line numbers to all lines (-n) 

// Commands:
// 1- node wcat.js filepath => displays content of the file in the terminal 
// 2- node wcat.js filepath1 filepath2 filepath3... => displays content of all files in the terminal(contactinated form) in the given order.
// 3- node wcat.js -s filepath => convert big line breaks into a singular line break
// 4- node wcat -n filepath => give numbering to all the lines 
// 5- node wcat -b filepath => give numbering to non-empty lines

// Edge cases:
// 1- If file entered is not found then it gives file does not exist error.
// 2- -n and -b are 2 options which are mutually exclusive so if user types both of them together only the first enter option should work.

let fs = require("fs");
let { sFn } = require("./commands/s_com");
let { nFn } = require("./commands/n_com");
let { bFn } = require("./commands/b_com");
let { viewFn } = require("./commands/view_content");

function file_check(path) {
    return fs.existsSync(path);
}

let input = process.argv.slice(2);
let com = input[0];

if (com == '-s' || com == '-n' || com == '-b') {
    switch (com) {
        case "-s":
            if (input.length == 2)
                sFn(input[1], "")
            else
                sFn(input[2], input[1]);
            break;

        case "-n":
            if (input.length == 2)
                nFn(input[1], "")
            else
                nFn(input[2], input[1]);
            break;

        case "-b":
            if (input.length == 2)
                bFn(input[1], "");
            else
                bFn(input[2], input[1]);
            break;
    }
}
else if (file_check(com)) {
    viewFn(input);
}
else {
    console.log("Wrong Command");
}