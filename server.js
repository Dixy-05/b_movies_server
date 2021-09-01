const express = require('express');
const app = express();
const router = require('./router/routes');
const cors = require('cors');
require('dotenv').config();
app.use(cors());
app.use(express.json());

app.use('/api', router);

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Server listening in port ${PORT}`);
});
