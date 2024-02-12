const mongoose = require("mongoose");
const mongooseAggregatePaginateV2 = require("mongoose-aggregate-paginate-v2");
const bcrypt = require("bcrypt");

const videoSchema = new mongoose.Schema({
  video: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duratoin: {
    type: Number,
    required: true,
  },
  views: {
    type: Number,
    default: 0,
  },
  isPublished: {
    type: Boolean,
    default: true,
  },
  owner: {
    type: Schema.Typees.ObjectId,
    ref: "User",
  },
});

videoSchema.plugin(mongooseAggregatePaginateV2);

const Video = mongoose.model("Video", videoSchema);
module.exports = Video;
