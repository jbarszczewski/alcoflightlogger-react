var mongoose = require('mongoose');

var FlightSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    name: String,
    createdOn: { type: Date, default: Date.now },
    stops: [{ id: Number, date: Date, lat: Number, lng: Number }]
});

module.exports = mongoose.model("Flight", FlightSchema);