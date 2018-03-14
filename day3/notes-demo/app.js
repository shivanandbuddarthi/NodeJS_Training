"use strict";
const argvObject = require('./config/app.yargs.config');
const appService = require('./business/app.service');

let addNoteCallback = (data, error) => {
    if (error != null) {
        console.log(`
        There is an error adding the note:
        ${error}
        `);
        return;
    }
    console.log(`
    Note added successfully...
    `);
}

let readNoteCallback = (data, error) => {
    if (error != null) {
        console.log(`
        There is an error while searching for the note:
        ${error}
        `);
        return;
    }
    console.log(data);
}

let listAllNotesCallback = (data, error) => {
    if (error != null) {
        console.log(`
        There is an error while fetching all the notes:
        ${error}
        `);
        return;
    }
    console.log(data);
}

let removeNoteCallback = (data, error) => {
    if (error != null) {
        console.log(`
        There is an error deleting the note:
        ${error}
        `);
        return;
    }
    console.log(`
    Note removed successfully...
    `);
}

let runNotes = () => {
    const command = argvObject._[0];
    if (command === "add") {
        let title = argvObject.title;
        let body = argvObject.body;
        appService.addNote(title, body, addNoteCallback);
    } else if (command == "read") {
        let title = argvObject.title;
        appService.readNote(title, readNoteCallback);
    } else if (command === "list") {
        appService.listAllNotes(listAllNotesCallback);
    } else if (command === "remove") {
        let title = argvObject.title;
        appService.removeNote(title, removeNoteCallback);
    } else {
        console.log(`
        Invalid command... Please see the help(node app.js --help)
        `);
    }
};

module.exports = {
    runNotes
}