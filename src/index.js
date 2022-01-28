const { MongoClient } = require('mongodb');
const dbURL = 'mongodb://localhost:27017';
const dbName = 'kashier';
const client = new MongoClient(dbURL);
const app = require('./app');
const port = 8080;

(async() => {
    await client.connect()
    let db = client.db(dbName)
    let collections = await (db.listCollections()).toArray()
    console.log(`Kashier transactions backend server has connected to the database [${dbURL}/${dbName}] successfully, collections=${collections.length}`);

    let onAppStarted = () => console.log(`Kashier transactions backend server is now running on http://localhost:${port}.`);
    let onAppError = (e) => console.error(`Kashier service stopped`)
    app.listen(port, onAppStarted).on('error', onAppError);
})().catch((e) => {
    console.error(`Error while starting kashier service: ${e}`)
})