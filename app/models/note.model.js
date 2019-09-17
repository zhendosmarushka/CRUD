const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    products: String,
    export: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);