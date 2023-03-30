const express = require("express")
const app = express();
const router = express.Router()

const {prof_info } = require('../Controller/profcontroller')

router.route('/prof').get(prof_info)


module.exports = router