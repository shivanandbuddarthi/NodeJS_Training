const FS = require("fs");

const persons = [{
    name: "Shivanand",
    id: 8058
}, {
    name: "Buddarthi",
    id: 8038
}];

let write = () => {
    FS.writeFileSync("data.json",
        JSON.stringify(persons));
}

let read = () => {
    let data = FS.readFileSync('data.json');
    let jsonData = JSON.parse(data);
    console.log(jsonData);
}

read();
