const express = require('express')
const db = require('./models/db')
const cors = require('cors')


const app = express();
const port = process.env.PORT || 5000;

// Sync database
db.sync().then(() => {
    app.listen(port, () => console.log(`Server listening on port ${port}`));
}).catch((err) => {
    console.log("Error occur when server start: " + err)
});

// Client and Server on 2 machine, 2 port,...
// This CORS allows get request from any address
app.use(cors());
app.options('*', cors());

// Routes as API
app.use('/', require('./routes/home'));
app.use('/auth', require('./routes/auth'));
app.use('/theater', require('./routes/theater'));
app.use('/cinema', require('./routes/cinema'));
app.use('/user', require('./routes/user'));
app.use('/movie', require('./routes/movie'));
app.use('/showtime', require('./routes/showtime'));
app.use('/booking', require('./routes/booking'));
app.use('/ticket',require('./routes/ticket'));
app.use('/revenue',require('./routes/revenue'));
app.use('/crawler',require('./routes/crawler'));