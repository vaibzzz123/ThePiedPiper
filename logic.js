const fs = require('fs');
const io = require('socket.io-client');
let dataFileObject = JSON.parse(fs.readFileSync('./data.txt', 'utf8')); //reads synchronously from data.txt file, and parses JSON to object
const socket = io('http://localhost:3000/'); //the location/port of our socket

// console.log(dataFileObject);

const update = (request) => {
    updateJsonFile(request);
}

const search = (reqBody) => {
    return getValue(reqBody);
}

const updateDataObject = (newObject) => { //updates dataFileObject to have KVPs from newObject
    const keyValPairs = Object.entries(newObject);
    keyValPairs.forEach(element => {
        dataFileObject[element[0]] = element[1];
    });
}

const updateJsonFile = (newJson) => {

    updateDataObject(newJson);

    fs.writeFile("./data.txt", JSON.stringify(dataFileObject), (err) => { //write stringified JSON of updated object to data.txt file
        if (err) { //callback function for error
            return console.log(err);
        }
    });

    const msg = 'JSON file updated! new contents: ' + JSON.stringify(newJson); //string showing the changes made
    socket.emit('update', msg);
}

const getValue = (key) => {
    if (dataFileObject.hasOwnProperty(key)) {
        return dataFileObject[key];
    }
    else {
        return('error, key "' + key + '" not found in file');
    }
}

module.exports = {
    update: update,
    search: search
}