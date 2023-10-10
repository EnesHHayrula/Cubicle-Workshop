const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required!"],
    minLength: [5, "Username should be more than 5 characters!"],
    match: [
      /^[A-Za-z0-9]+$/,
      "Username should be written with english letters only!",
    ],
    unique: {
      value: true,
      message: "Username is already in use!",
    },
  },
  password: {
    type: String,
    minLength: [8, "Password should be more than 8 characters"],
    validate: {
      validator: function (value) {
        return /^[A-Za-z0-9]+$/.test(value);
      },
      message: "Invalid password format!",
    },
  },
});

userSchema.path("username").validate(function (username) {
  const user = mongoose.model("User").findOne({ username });
  return !!user;
}, "Username already in use!");

//TODO: if user exists throw error
userSchema.virtual("repeatPassword").set(function (value) {
  if (value !== this.password) {
    throw new Error("Wrong password!");
  }
});

userSchema.pre("save", async function () {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
});

const User = mongoose.model("User", userSchema);

module.exports = User;
