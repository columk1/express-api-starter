import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema(
  {
    comment_body: { type: String, required: true },
    author: { type: String, required: true },
    post_id: { type: mongoose.Schema.Types.ObjectId('Post'), ref: 'Post' },
  },
  { timestamps: true }
)

const Comment = mongoose.model('Comment', commentSchema)

export default Comment
