import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema(
  {
    author_name: { type: String, required: true },
    text: { type: String, required: true },
    post: { type: mongoose.Schema.Types.ObjectId('Post'), ref: 'Post' },
  },
  { timestamps: true }
)

const Comment = mongoose.model('Comment', commentSchema)

export default Comment
