// const MongoClient = require('mongodb').MongoClient; code below is identical as this
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a6f3cb5119c7c365afc7ec0'),
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //     returnOriginal: false
  //   }).then((result) => {
  //     console.log(result);
  //   });
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a6f105e1ae78f11e4aa9e6f'),
  }, {
    $set: {
      name: "Ruslan"
    },
    $inc: {
      age: 1
    }
  }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });
  });
  // db.close();
// });
