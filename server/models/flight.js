var mongoose = require('mongoose');

var FlightSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    name: String,
    createdOn: { type: Date, default: Date.now },
    stops: [{ id: Number, date: Date, lat: Number, lng: Number }]
});

FlightSchema.statics.findLast = function (userId, callback) {
    this.findOne({ userId: userId }) // 'this' now refers to the Member class
        .sort('-createdOn')
        .exec(callback);
}

module.exports = mongoose.model("Flight", FlightSchema);