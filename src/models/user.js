let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    id: { type: String },
    name: { type: String },
    email: { type: String},
    phone: { type: String }
}, { versionKey: false });

let User = mongoose.model('Users', userSchema);

module.exports = User;