const express = require('express'); // exports a function
const app = express(); // so we execute it here
const bodyParser = require('body-parser'); // it is a middleware that extracts the entire body portion
// of an incoming request stream and exposes it on req.body
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');
app.set('view engine', 'pug')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
	console.log('this always runs');
	next();
});

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
	res.render('404', {pageTitle: '404 Not Found'})
});

app.listen(3000)

// GET POST PATCH DELETE searches for exact match
// while use can be excuted even if root route is matched
