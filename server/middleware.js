var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');

module.exports = function (app, express) {
	app.use(morgan('dev'));
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(express.static(path.join(__dirname, '../client')));
	// app.get('/dist/app.js', function (req, res) {
	// 	res.sendfile(path.join(__dirname, '../client/dist/app.js'));
	// });
	// app.get('/', function (req, res) {
	// 	res.sendfile(path.join(__dirname, '../client/index.html'));
	// });
};
