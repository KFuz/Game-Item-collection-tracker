const { route } = require("./auth");
const router = require("express").Router()

router.get('/items',(req,res)=>{
    res.render('myitems.ejs')
})
module.exports = router;
