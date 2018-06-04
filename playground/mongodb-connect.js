// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('Unable to conect to MongoDB server.')
  }
    console.log('Connected to MongoDB server.');
    const db = client.db('TodoApp')
//
//     db.collection('Users').insertOne({
//       name: 'Drew',
//       age: 21,
//       location: 'Philadelphia'
//     }, (err, result) => {
//       if (err) {
//         return console.log('Unable to insert user', err);
//       }
//       console.log(JSON.stringify(result.ops[0]._id));
//       console.log(result.ops[0]._id.getTimestamp());
//     });

    client.close();
});
