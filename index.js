const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

dotenv.config();

mongoose.connect(process.env.DB_CONNECT, {
   useNewUrlParser: true,
   useUnifiedTopology: true
 },
() => console.log('Database Connected'));

app.use(express.json());

app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(5000, () => console.log('Server is active'));