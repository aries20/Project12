const express = require('express')
const router = express.Router()
const { getGoals, setGoals, editGoals, deleteGoals 
} = require('../controllers/goalcontroller')

router.route('/').get(getGoals).post(setGoals)
router.route('/:id').delete(deleteGoals).put(editGoals)



module.exports = router