const mongoose = require("mongoose");
const {Schema} = mongoose;

const countSchema = new Schema({
  count: Number,
});

module.exports = mongoose.model("Count", countSchema);