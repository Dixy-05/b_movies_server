const express = require('express');
const app = express();
require('dotenv').config();

const router = require('./router/routes');
app.use(express.json());

app.use('/', router);

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Server listening in port ${PORT}`);
});
