const express = require('express')
const DonationController = require('../controllers/donationController')
const router = express.Router()
router.post('/payment', DonationController.createPayment)
router.post('/subscription', DonationController.createSubscription)

module.exports = router