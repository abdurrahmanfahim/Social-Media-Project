const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const { ObjectId } = mongoose.Types;

const userModel = new Schema(
  {
    fName: {
      type: String,
      required: true,
      trim: true,
      text: true,
    },
    lName: {
      type: String,
      required: true,
      trim: true,
      text: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      text: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    cover: {
      type: String,
      trim: true,
    },
    birthDay: {
      type: Number,
      required: true,
    },
    birthMonth: {
      type: Number,
      required: true,
    },
    birthYear: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    friends: [
      {
        type: ObjectId,
        ref: "user",
      },
    ],
    followers: [
      {
        type: ObjectId,
        ref: "user",
      },
    ],
    following: [
      {
        type: ObjectId,
        ref: "user",
      },
    ],
    request: [
      {
        type: ObjectId,
        ref: "user",
      },
    ],
    search: [
      {
        user: {
          type: ObjectId,
          ref: "user",
          required: true,
        },
        createdAt: {
          type: Date,
          required: true,
        },
      },
    ],
    details: {
      bio: {
        type: String,
      },
      otherName: {
        type: String,
      },
      job: {
        type: String,
      },
      currentCity: {
        type: String,
      },
      workplace: {
        type: String,
      },
      college: {
        type: String,
      },
      highSchool: {
        type: String,
      },
      homeTown: {
        type: String,
      },
      relationship: {
        type: String,
        enum: [
          `Single`,
          `Married`,
          `Divorced`,
          `In a Relationship`,
          `It's Complicated`,
        ],
      },
      instagram: {
        type: String,
      },
    },
    savePost: [
      {
        post: {
          type: ObjectId,
          ref: "post",
        },
        savedAt: {
          type: Date,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model("user", userModel);

