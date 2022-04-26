// This file contains sample API Endpoints:

const express = require("express");
const router = express.Router();

// POST
router.post("/post",(req,res) => {
    res.status(200).json({
        data: "post"
    })
    // Can also set status of response object w/ res.statusCode
})

/*
// PATCH
router.patch("/patch",(req,res) => {
    res.status(200).json({
        data: "put"
    })
})

// GET
router.get("/get",(req,res) => {
    res.status(200).json({
        data: "get"
    })
})

// DELETE
router.delete("/delete",(req,res) => {
    res.status(200).json({
        data: "delete"
    })
})
*/

// Mock Test Route:
// router.get("/apiMockTest",(req,res) => {
//     res.status(200).json({
//         data: "notApiMockTest"
//     })
// })

module.exports = router;