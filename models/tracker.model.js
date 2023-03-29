const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrackerSchema = new Schema({
    path: {
        type: String,
        required: true
    },
    timeSpent: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
}
);

mongoose.models = {}
module.exports = mongoose.model("Tracker", TrackerSchema);
