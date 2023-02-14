const asyncHandler = require('express-async-handler')


// @description Get all goals at start
// @route GET /api/goals
// @access Private

const getGoals = asyncHandler(async(req,res) => {
    
    res.status(200).json({ message: 'Get goals'})
})

// @description Create  goals at start
// @route POST /api/goals
// @access Private

const setGoals = asyncHandler(async(req,res) => {

    if(!req.body.text){
        res.status(400)
        throw new Error('Please add text field')
    }
    res.status(200).json({ message: 'Create goals'})
})

// @description Edit  goals 
// @route PUT /api/goals/:id
// @access Private

const editGoals = asyncHandler(async(req,res) => {
    res.status(200).json({ message: `Updated goals with ${req.params.id}`})
})

// @description DELETE  goals 
// @route DELETE /api/goals/:id
// @access Private

const deleteGoals = asyncHandler(async(req,res) => {
    res.status(200).json({ message: `Delete goals with ${req.params.id}`})
})


module.exports = {
    getGoals,setGoals,editGoals,deleteGoals,
}