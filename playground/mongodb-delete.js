// const MongoClient = require('mongodb').MongoClient; code below is identical as this
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //  deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lucnh'}).then((result) => {
  //   console.log(result);
  // });
  //  deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lucnh'}).then((result) => {
  //   console.log(result);
  // });
  //  findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });
  // db.close();


  // db.collection('Users').deleteOne({name: 'Ruslan'}).then((result) => {
  //   console.log(result);
// });

  // db.collection('Users').deleteMany({name: 'Ruslan'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').findOneAndDelete({_id: new ObjectID('5a6f11e6523c938ec4df8ca5')}).then((result) => {
  //   console.log(result);
  // });
});
