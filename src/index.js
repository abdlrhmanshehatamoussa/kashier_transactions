const app = require('./app');
const { apiPort } = require('./config');
const { mongoDb } = require('./commons/mongo_provider');

console.log(`Kashier transactions backend server has connected to the database [${mongoDb.databaseName}] successfully`);
let onAppStarted = () => console.log(`Kashier transactions backend server is now running on http://localhost:${apiPort}.`);
let onAppError = () => console.error(`Kashier service stopped`)
app.listen(apiPort, onAppStarted).on('error', onAppError);