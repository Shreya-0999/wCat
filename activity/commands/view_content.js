// 1. open the file
// 2. copy the content
// 3. paste it on terminal
let fs = require("fs");

function isFileorNOt(dirpath) {
    return fs.lstatSync(dirpath).isFile(); //----------------//
}

function viewCommand(files){
    for(let  i = 0; i < files.length; i++)
    {
        let isFile = isFileorNOt(files[i]);
        if (isFile == true){
            let data = fs.readFileSync(files[i], {encoding:'utf8', flag:'r'}); 
            console.log(data);
        }
        else{
            console.log("file does not exist");
        }
    }
    
}

module.exports = {
    viewFn : viewCommand
}