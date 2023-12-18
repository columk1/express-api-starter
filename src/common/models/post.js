import { Schema, model } from 'mongoose'

// prettier-ignore
export const categories = ['JavaScript', 'HTML', 'CSS', 'React', 'Node', 'Express', 'MongoDB', 'Career', 'Animation','Other']

const postSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: 'User', required: [true, 'Author is required'] },
    title: { type: String, required: [true, 'Title is required'] },
    image_url: { type: String },
    image_credit: { type: String },
    content: {
      type: String,
      required: [true, 'Content is required'],
    },
    tags: [{ type: String, enum: categories }],
    comment_count: { type: Number, default: 0 },
    is_published: { type: Boolean, default: false },
    is_featured: { type: Boolean, default: false },
  },
  { timestamps: true }
)

postSchema.virtual('slug').get(function () {
  return slugify(this.title)
})

function slugify(str) {
  return String(str)
    .normalize('NFKD') // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
    .replace(/\s+/g, '-') // replace spaces with hyphens
    .replace(/-+/g, '-') // remove consecutive hyphens
}

const Post = model('Post', postSchema)

export default Post
