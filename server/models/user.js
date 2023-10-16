import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
  country: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  interests: [],
});

const User = mongoose.model("User", userSchema);

export default User;