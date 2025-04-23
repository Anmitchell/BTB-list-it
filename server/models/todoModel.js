const { Schema, model } = require("mongoose");

const todoSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = model("Todo", todoSchema);
