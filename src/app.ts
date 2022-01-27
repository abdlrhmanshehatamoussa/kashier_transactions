import express from 'express';
import addRoutes from './router';

const app = express();
const port = 8080;
const bodyParser = require('body-parser')
app.use(bodyParser.json({ limit: '50mb' }));

addRoutes(app)

app.listen(port, () => {
  console.log(`Kashier transactions backend server is running on http://localhost:${port}.`);
});