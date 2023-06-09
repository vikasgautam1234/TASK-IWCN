const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');
const cors = require("cors")


const app = express();
app.use(cors({origin:"*"}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', route);

app.listen(process.env.PORT || 3001, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3001))
});

