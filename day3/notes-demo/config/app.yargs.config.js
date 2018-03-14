const yargs = require('yargs');

// add: Adds a new note (add --titile "soem title" --body "some body")
// read: Reads an existing note (read --title "some title")
// remove: Removes an existing note (remove --title "some title")
// list: Lists all the notes (list)

//help menu (help)

let titleConfig = {
    describe: "Title of the note",
    demand: true,
    alias: "t"
};
let bodyconfig = {
    describe: "Body of the note",
    demand: true,
    alias: "b"
};

const argvObject = yargs
    .command("add", "Adds a new note", {
        title: titleConfig, body: bodyconfig
    })
    .command("read", "Reads an existing note", {
        title: titleConfig
    })
    .command("remove", "Removes an existing note", {
        title: titleConfig
    })
    .command("list", "Lists all the notes")
    .help()
    .argv;

module.exports = argvObject;