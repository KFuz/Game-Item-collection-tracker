const { route } = require("./auth");
const Game = require("../models/Games");
const Item = require("../models/Items");
const router = require("express").Router()

// items page

router.get('/',(req,res)=>{
    res.render('items/myitems.ejs')
})








module.exports = router;
