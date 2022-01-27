import express from 'express';
import addRoutes from './router';

const app = express();
const port = 3000;
const bodyParser = require('body-parser')
app.use(bodyParser.json({ limit: '50mb' }));
app.use('/api-docs/swagger', express.static('swagger'));
app.use('/api-docs/swagger/assets', express.static('node_modules/swagger-ui-dist'));

addRoutes(app)

app.listen(port, () => {
  console.log(`Kashier transactions backend server is running on http://localhost:${port}.`);
});