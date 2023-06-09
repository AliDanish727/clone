const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseTypeSchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
}
);

mongoose.models = {}
module.exports = mongoose.model("CourseType", CourseTypeSchema);
