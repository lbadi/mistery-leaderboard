var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecordSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true 
    }
});

module.exports = mongoose.model('Record', RecordSchema);
