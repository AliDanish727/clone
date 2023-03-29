const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TopFormSectionContentSchema = new Schema({
    htmlContent: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
}
);

mongoose.models = {}
module.exports = mongoose.model("TopFormSectionContent", TopFormSectionContentSchema);
