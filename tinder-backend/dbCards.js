import Mongoose from "mongoose";

const cardSchema = Mongoose.Schema({
  name: String,
  imagUrl: String,
});

export default Mongoose.model("cards", cardSchema);
