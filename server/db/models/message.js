const mongoose = require('mongoose');

const { Schema } = mongoose;

const MessageModel = new Schema({

	messageList:{
		type:Array
	}

})

mongoose.model('Message', MessageModel)