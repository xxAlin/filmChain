const { model, Schema } = require("mongoose");

const movieSchema = new Schema({
  title: String,
  share_value: String,
});

module.exports = model("Movie", movieSchema);
