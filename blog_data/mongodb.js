
const {MongoClient, ObjectID} =  require('mongodb')

const connectionURL =  'mongodb://127.0.0.1:27017'
const databaseName = 'blog-data'

const id = new ObjectID()

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client)=>{
    if(error){
        return console.log('unbabel')
    }

 const db =  client.db(databaseName)
 db.collection('users').createIndex({email: 1},{ unique: true });

db.collection('users').insertMany([
    {
        userId: id, 
        name:'aviya', 
        email:'aviya@gmail.com'
    }, {
        userId: id,
        name:'israel', 
        email: 'israel@gmail.com'
    }
], (error, result)=>{
    if(error){
        return console.log('unable to insert documents!');
    }
})



db.collection('posts').insertMany([
    {
        title: "mongo db conncect", 
        text: 'bla bla', 
        postID: id, 
        userId: id
    },{
        title: "mongo db vlien", 
        text: ' bla', 
        postID: id,
        userId: id
    }
])
db.collection('comment').insertMany([
    {
    commentID:id, 
    author: 'aviya', 
    postID:id
},
],
(error, result)=>{
    if(error){
        return console.log('unabel user');
    }
    console.log(result.ops);
})
})