const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema({
  postTitle: {
    type: String,
    required: 'You need to title your creation!',
    minlength: 1,
    maxlength: 150,
    trim: true,
  },
  postAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  postDescription: {
    type: String,
    required: 'Describe your creation!',
    minlength: 1,
    maxlength: 150,
    trim: true,
  },
  image: {
    {
      fileName: {
        type: String,
        required: true,
      },
      file: {
        data: Buffer,
        contentType: String,
      },
      uploadDate: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Post = model('Post', postSchema);

module.exports = Post;
