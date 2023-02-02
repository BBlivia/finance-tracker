const asyncHandler = require("express-async-handler")

const getBills = asyncHandler(async(req, res)=>{
    res.json({message: 'get all bills '})
})

const addBills = asyncHandler(async(req, res)=>{
    res.json({message: 'bill added '})
})

const updateBills = asyncHandler(async(req, res)=>{
    res.json({message: 'bill updated '})
})

const deleteBills = asyncHandler(async(req, res)=>{
    res.json({message: 'bill deleted '})
})










module.exports = {
    getBills,
    addBills,
    updateBills,
    deleteBills
}