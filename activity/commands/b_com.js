let fs = require("fs");
let { sFn } = require("./s_com");

function isFileorNOt(dirpath) {
    return fs.lstatSync(dirpath).isFile(); //----------------//
}

function printdata(filepath, sdata, cmd) {
    let n = 1;
    if (cmd == '-s') {
        sFn(filepath, '-b');
    }
    else {
        for (let i in sdata) {
            if (sdata[i] != '\r') {
                console.log(n++, sdata[i]);
            }
            else {
                console.log(sdata[i]);
            }
        }
    }
}

function bCommand(filepath, cmd) {
    let isFile = isFileorNOt(filepath);
    if (isFile == true) {
        let data = fs.readFileSync(filepath, { encoding: 'utf8', flag: 'r' });
        let sdata = data.split("\n");
        printdata(filepath, sdata, cmd);
    }
    else {
        console.log("file does not exist");
    }
}

module.exports = {
    bFn: bCommand
}