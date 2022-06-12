const express = require('express')
const path = require('path')
const rootDir = require('../utils/path.js')
const router = express.Router() 
const adminData = require('./admin')

router.get('/', (req, res, next) => {
	res.render('shop', {prods: adminData.products, pageTitle: 'Shop', path: '/'})
//	res.sendFile('../views/shop.html')
});

module.exports = router
