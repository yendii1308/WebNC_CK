const mongoose = require('mongoose')
const postSchema = mongoose.Schema({
	content 	: String,
	creatorID 	: String,
	created_at 	: Date,
})

const Post = mongoose.model('Post',postSchema)
module.exports = Post
