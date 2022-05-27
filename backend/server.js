const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT ||  5000;
const connectDb = require('./config/db')
const cors = require('cors')

connectDb()

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use('/api/goals',require('./routes/goRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`Server started on Port: ${port}`)
})