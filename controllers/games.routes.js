const { route } = require("./auth");
const Game = require("../models/Games");
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

// Show create games
router.get("/create", async (req, res) => {
  const games = await Game.find();
  res.render("../views/Games/creategame.ejs", { games });
});

 