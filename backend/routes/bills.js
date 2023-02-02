const express = require('express')
const router = express.Router()
const {getBills,addBills, updateBills, deleteBills } = require('../controllers/billsController')

router.route('/bills').get(getBills).post(addBills).put(updateBills).delete(deleteBills)


module.exports = router