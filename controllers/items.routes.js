const { route } = require("./auth");
const Game = require("../models/Games");
const Item = require("../models/Items");
const router = require("express").Router()

// items page

router.get('/',(req,res)=>{
    res.render('items/myitems.ejs')
})

//item create

router.get("/createitem", async(req, res) => {
const allGames = await Game.find() 
  res.render('items/createitem.ejs',{allGames:allGames});
});


router.post('/createitem', async(req,res)=>{
    req.body.creator = req.session.user_id
    const createdItem = await Item.create(req.body)
    res.redirect('/items/createitem')
})
//list all 
router.get("/myitems", async (req, res) => {
  const allItems = await Game.find();
  res.render("items/myitems", {allItems:allItems});
  console.log(allItems)
});
// delete
router.post("/delete/:id",async(req,res)=>{
  await Item.findByIdAndDelete(req.params.id)
    res.redirect('/items/myitems')
})
// update

router.get('/update/:id', async(req,res)=>{
 const foundGame = await Game.findById(req.params.id)
res.render('items/updateitem.ejs',{foundGame: foundGame})
 })

router.post('/update/:id', async (req,res)=>{
 
 await Item.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/items/myitems')
})







module.exports = router;
