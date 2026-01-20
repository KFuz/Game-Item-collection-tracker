const { route } = require("./auth");

const router = require("express").Router()


router.get('/games',(req,res)=>{
    res.render('Games/mygames.ejs')
})
module.exports = router;

// add create game route
// add create game form/ page
// add delete game form/page it should also delete items from 
// items list as well
//add games details page