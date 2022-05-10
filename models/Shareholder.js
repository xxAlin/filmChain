const { model, Schema } = require("mongoose");

const shareholderSchema = new Schema({
  firstname: String,
  address: String,
  iban: String,
  movie_id: { type: String, default: 0 },
  balance: { type: String, default: 0 },
});

module.exports = model("Shareholder", shareholderSchema);
