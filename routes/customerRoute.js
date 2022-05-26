const express = require('express');
const {
    getCustomers,
    checkBody,
    createCustomer
} = require('../controllers/customerController');

// * Routes
const router = express.Router();


router.route('/users').get(getCustomers).post(checkBody, createCustomer);;


exports.customerRouter = router; 
