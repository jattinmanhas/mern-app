const asyncHandler = require('express-async-handler')

//@des    Get Goals 
// @route  GET /api/goals
// @access  Private

const getGoals = asyncHandler(async (req,res)=>{
    res.status(200).json({message: "Get Goals"})
})

//@des    Set Goals 
// @route  POST/api/goals
// @access  Private

const setGoals = asyncHandler(async (req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error("Please add a text field");
    }


    res.status(200).json({message: "Set Goals"})
})

//@des    Update Goal
// @route  PUT /api/goals/id
// @access  Private

const updateGoals = asyncHandler(async (req,res)=>{
    res.status(200).json({message: `Update Goals ${req.params.id}`});
})

//@des    Delete Goal
// @route  GET /api/goals/id
// @access  Private

const deleteGoals = asyncHandler(async (req,res)=>{
    res.status(200).json({message: `Delete Goal ${req.params.id}`});
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}