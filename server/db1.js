const { MongoClient } = require('mongodb');
// Replace the uri string with your MongoDB deployment's connection string.
const MONGODB_URI ="mongodb+srv://Antoine:juliette1733@cluster0.nwpvf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const MONGODB_DB_NAME = 'clearfashion';
async function run() {
    const client = await MongoClient.connect(MONGODB_URI, {'useNewUrlParser': true});
    const db =  client.db(MONGODB_DB_NAME);
    console.log("connected");
}
run().catch(console.dir);