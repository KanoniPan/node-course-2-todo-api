// const MongoClient = require('mongodb').MongoClient; code below is identical as this
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//   db.collection('Todos').find({
//     _id: new ObjectID('5a6f17db119c7c365afc7935')
// }).toArray().then((docs) => {
//     console.log('Todos');
//     console.log(JSON.stringify(docs, undefined, 2));
//     // console.log(JSON.stringify(docs[0].text, undefined, 2)); this how you can work with objects inside collection
//   }, (err) => {
//     console.log('Unable to fetch todos',err);
//   });

//count how many items are in collection
// db.collection('Todos').find().count().then((count) => {
//   console.log(`Todos count: ${count}`);
//
// }, (err) => {
//   console.log('Unable to fetch todos',err);
// });

  db.collection('Users').find({name: 'Ruslan'}).toArray().then((docs) =>{
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });
  // db.close();
});
