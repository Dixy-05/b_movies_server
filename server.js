const express = require('express');
const app = express();
const router = require('./router/routes');
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('dotenv').config();
// const corsOptions = {
//   credentials: true,
//   origin: true,
// };
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api', router);
// var corsOptions = {
//   origin: 'http://example.com',
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };
// app.get('/cookies', (req, res) => {
//   res.cookie('cookie', '123456');
//   res.send('got the cookie!!');
// });

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Server listening in port ${PORT}`);
});
