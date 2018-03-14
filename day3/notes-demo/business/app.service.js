"use strict";
const Note = require('../entity/note');
const FS = require('fs');
const file = "./data/notes-data.json";

let getAllNotes = () => {
    let allNotes = [];
    try {
        //console.log(FS.existsSync(file));
        if (FS.existsSync(file)) {
            let buffer = FS.readFileSync(file);
            allNotes = JSON.parse(buffer);
        } else {
            return null;
        }
    } catch (error) {
        console.log("No data exists");
    }
    return allNotes;
}

let checkNote = (title, allNotes) => {
    for (let index in allNotes) {
        if (allNotes[index].title === title) {
            return allNotes[index];
        }
    }
    return undefined;
}

let addNote = (title, body, addCallback) => {
    let noteObj = new Note(title, body);
    let allNotes = getAllNotes();
    if (allNotes === null) {
        addCallback(null, "File doesn't exist");
        return;
    }
    if (checkNote(noteObj.title, allNotes) === undefined) {
        allNotes.push(noteObj);
        FS.writeFileSync(file, JSON.stringify(allNotes));
        addCallback(allNotes);
    } else {
        addCallback(null, "Note already exists...");
    }
}

let readNote = (title, readCallback) => {
    let allNotes = getAllNotes();
    if (allNotes === null) {
        readCallback(null, "File doesn't exist");
        return;
    }
    let foundNote = checkNote(title, allNotes);
    if (foundNote === undefined) {
        readCallback(null, "No note exists with the title " + title);
    } else {
        readCallback(foundNote);
    }
}

let listAllNotes = (callback) => {
    let allNotes = getAllNotes();
    if (allNotes === null) {
        callback(null, "File doesn't exist");
    } else {
        callback((allNotes));
    }
}

let removeNote = (title, callback) => {
    let allNotes = getAllNotes();
    if (allNotes === null) {
        callback(null, "File doesn't exist");
        return;
    }
    let foundNote = checkNote(title, allNotes);
    if (foundNote === undefined) {
        callback(null, "No note exists with the title " + title);
    } else {
        let index = allNotes.indexOf(foundNote);
        allNotes.splice(index, 1);
        FS.writeFileSync(file, JSON.stringify(allNotes));
        callback(allNotes);
    }
}

module.exports = {
    addNote, readNote, listAllNotes, removeNote
}