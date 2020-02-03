const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017', 
	{
		useNewUrlParser:true,
		useUnifiedTopology:true
	}
	,(err, result) => {
		if (err) {
			throw err;
		}
		console.log("Connected to mongo local");
})