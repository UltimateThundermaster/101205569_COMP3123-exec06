const express = require('express');
const noteModel = require('../models/NotesModel');
const app = express();
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
app.post('/notes', (req, res) => {
    // Validate request
    const note = new noteModel(req.body);
    try {
        note.save();
        res.send(note);
    } catch (error) {
        res.status(500).send(error);
    }
    //TODO - Write your code here to save the note
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
app.get('/notes', async (req, res) => {
    // Validate request
    const notes = await noteModel.find({});
    try {
        res.send(notes);
    } catch (error) {
        res.status(500).send(error);
    }
    //TODO - Write your code here to returns all note
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
app.get('/notes/:noteId', async (req, res) => {
    // Validate request
    const note = await noteModel.findById(req.params.noteId);
    try {
        res.send(note)
    } catch (error){
        res.status(500).send(error)
    }
    //TODO - Write your code here to return onlt one note using noteid
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
app.put('/notes/:noteId', async (req, res) => {
    // Validate request
    try {
        const updatedNotes = await noteModel.findByIdAndUpdate(req.params.noteId, req.body)
        await updatedNotes.save()
        res.send("Notes updated")
    } catch (error) {
        res.status(500).send(error)
    }
    //TODO - Write your code here to update the note using noteid
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
app.delete('/notes/:noteId', async (req, res) => {
    // Validate request
    try {
        const note = await
        noteModel.findByIdAndDelete(req.params.noteId)
        if (!note) res.status(404).send("No item found")
        res.status(200).send("Deleted Successfully")
    } catch (error) {
        res.status(500).send(error)
    }
    //TODO - Write your code here to delete the note using noteid
});


module.exports = app