let fs = require("fs");
let { sFn } = require("./s_com");

function isFileorNOt(dirpath) {
    return fs.lstatSync(dirpath).isFile(); //----------------//
}

function printdata(filepath, sdata, cmd) {
    let n = 1;
    if (cmd == '-s') {
        sFn(filepath, '-n');
    }
    else
        for (let i in sdata) {
            console.log(n++, sdata[i]);
        }
}

function nCommand(filepath, cmd) {
    let isFile = isFileorNOt(filepath);
    if (isFile == true) {
        let data = fs.readFileSync(filepath, { encoding: 'utf8', flag: 'r' });
        let sdata = data.split("\n");
        // console.log(sdata);
        printdata(filepath, sdata, cmd);
    }
    else {
        console.log("file does not exist");
    }
}

module.exports = {
    nFn: nCommand
}