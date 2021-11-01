const express = require('express');
const router = express.Router();
const {LaCroix} = require('../models');

router.get("/",(req,res)=>{
    LaCroix.findAll().then(data=>{
        const hbsData = data.map(datum=>datum.get({plain:true}));
        console.log(hbsData)
        res.render("home",{flavors:hbsData})
    })
})

module.exports = router;