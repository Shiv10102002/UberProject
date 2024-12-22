const dotenv = require('dotenv');
dotenv.config();
const express  = require('express');
const cors = require('cors')
const app = express();
const cookieParser = require('cookie-parser');

const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');
const connectToDB = require('./db/db');
connectToDB();

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


app.use('/api/v1/users', userRoutes);  
app.use('/api/v1/captains', captainRoutes); 

app.use((error, req, res, next) => {
    res.status(500).json({ message: error.message });
})


module.exports = app;

