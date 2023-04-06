const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    name: {type: String, require: true },
    user: {
        type: mongoose.Sschema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Note', noteSchema);