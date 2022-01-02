const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
  name: String,
  username: String,
  pass: String,
})
const User = mongoose.model('User', userSchema)
module.exports = User

async function Check() {
	let user = await User.findOne({"username": "admin"});
	if(user == null){
	  new User({
		name: "Admin",
		username: "admin",
		pass: "123456",
	  }).save()
	
	  new User({
		name: "Tester_1",
		username: "user1",
		pass: "123456",
	  }).save()
	
	  new User({
		name: "Tester_2",
		username: "user2",
		pass: "123456",
	  }).save()
	}
  }
  Check()