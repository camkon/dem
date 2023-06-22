/* This code is defining a Mongoose schema for a post, which includes fields such as title, message,
creator, tags, selectedFile, likeCount, and createdAt. It then creates a Mongoose model for this
schema called "PostMessage" and exports it as the default export of the module. This allows other
parts of the application to import and use this model to interact with a MongoDB database. */
import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage