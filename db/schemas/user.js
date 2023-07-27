import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: false,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
});

const UserModel = mongoose.model("User", UserSchema);
export { UserModel };
