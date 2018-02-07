var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI { useMongoClient: true });

module.exports = {mongoose};


// process.end.NODE_ENV === 'production'   (right side is wroten by heroku by default)
