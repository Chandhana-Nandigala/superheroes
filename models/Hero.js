const mongoose = require("mongoose");

const HeroSchema = new mongoose.Schema({
  superHero: {
    type: String,
    required: [true, "Please name the hero"],
    unique: true,
    trim: true,
  },
  realName: {
    type: String,
    required: true,
    maxlength: [200, "Please keep real name short!"],
  },
});

// mern stack
// module.exports = mongoose.model('Hero', HeroSchema)
// next world
module.exports = mongoose.models.Hero || mongoose.model("Hero", HeroSchema);
