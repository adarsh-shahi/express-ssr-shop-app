const express = require('express')
const router = express.Router()
const path = require('path')
const rootDir = require('../utils/path.js')

router.get('/add-product', (req, res, next) => {
	res.sendFile(path.join(rootDir, '/views/add-product.html'))
	// next()  // allows the request to continue to next middleware
});

router.post('/add-product', (req, res, next) => {
	console.log(req.body);
	res.redirect('/');
});

module.exports = router
