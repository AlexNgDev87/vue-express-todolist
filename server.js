let express = require('express');

let morgan = require('morgan');

let path = require('path');

let cors = require('cors');

let app = express();

let mongoose = require('mongoose');

let bodyParser = require('body-parser');

let config = require('./server/config');

mongoose.connect(config.DB);

app.use(express.static(path.join(__dirname, '/public')));

app.use(morgan('dev'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

let port = config.APP_PORT || 4000;

app.listen(port);

console.log('App listening on port ' + port);

let todoRoutes = require('./server/routes');

app.use('/api', todoRoutes);

app.get('/', function (req, res, next) {
    res.sendFile('./public/index.html')
})