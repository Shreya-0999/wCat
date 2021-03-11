let fs = require("fs");

function isFileorNOt(dirpath) {
    return fs.lstatSync(dirpath).isFile(); //----------------//
}

function sCommand(filepath, cmd) {
    let isFile = isFileorNOt(filepath);
    let sdata;
    if (isFile == true) {
        let data = fs.readFileSync(filepath, { encoding: 'utf8', flag: 'r' });
        sdata = data.split("\n");
        // console.log(sdata);
        let num = 1, n = 0;
        for (let i in sdata) {
            if (sdata[i] == '\r')
                n++;
            else {
                if (n > 0) {
                    n = 0;
                    (cmd == '-n') ? console.log(num++) : console.log();
                }
                (cmd == '-n') ? console.log(num++, sdata[i]) : (cmd == '-b') ? console.log(num++, sdata[i]) : console.log(sdata[i]);
            }
        }
    }
    else {
        console.log("file does not exist");
    }
}

module.exports = {
    sFn: sCommand
}