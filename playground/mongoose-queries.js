const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
// var id = '5a70ac0673c78d34126ce63b';
//
// if (!ObjectID.isValid(id)){
//   console.log('Id not valid');
// }
// Todo.find({
//   _id: id
// }).then((todos) =>{
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) =>{
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) =>{
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById('5a7071dfe679f630486c6d80').then((user) => {
  if(!user) {
    return console.log('User not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});

// or can can do like this
// var id = '5a7071dfe679f630486c6d80';
// User.findById(id).then((user) => {
//   if(!user) {
//     return console.log('User not found');
//   }
//   console.log('User By Id', user)
// }).catch((e) => console.log(e));
