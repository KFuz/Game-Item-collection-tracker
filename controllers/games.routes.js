const { route } = require("./auth");
const Game = require("../models/Games");
const router = require("express").Router()


router.get('/',(req,res)=>{
    res.render('Games/mygames.ejs')
})

// add create game route
// add create game form/ page
// add delete game form/page it should also delete items from 
// items list as well
//add games details page

// Show create games page & create games page

router.get("/creategame", (req, res) => {
  res.render('games/creategame.ejs');
});


router.post('/createGame', async(req,res)=>{
    req.body.creator = req.session.user_id
    const createdGame = await Game.create(req.body)
    res.redirect('/games/creategame')
})

router.get("/mygames", async (req, res) => {
  const allGames = await Game.find();
  res.render("games/mygames", {allGames:allGames});
  console.log(allGames)
});

module.exports = router
 