const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const notesSchema = mongoose.Schema({
    noteTitle: {
        type: String
    },
    noteDescription: {
        type: String
    },
    priority: {
        type: String,
        enum: ['HIGH', 'LOW', 'MEDIUM'],
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
    dateUpdated: {
        type: Date,
        default: Date.now
    }
})

const notesModel = mongoose.model("Notes", notesSchema);

module.exports = notesModel