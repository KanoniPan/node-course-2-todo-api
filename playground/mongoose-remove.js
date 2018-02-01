const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}); you can't do something like this Todo.remove();

// Todo.remove({}).then((result) => {
//   console.log(result);
// });


// Todo.findOneAndRemove

Todo.findOneAndRemove({_id: '5a71e0180dfe4df12df6f289'}).then((todo) => {
  console.log(todo);
})


// Todo.findByIdAndRemove

// Todo.findByIdAndRemove('5a71dfbc0dfe4df12df6f270').then((todo) => {
//   console.log(todo);
// })
