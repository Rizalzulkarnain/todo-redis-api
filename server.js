const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const connectDB = require('./config/db');

const todoRoute = require('./routes/todoRoute');

require('./utils/redis');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/todo', todoRoute);

connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on Port: ${PORT}`));

//Handle unHandle Rejection
process.on('unHandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
