const express = require("express")
const app = express()
const PORT = 3000
const fruits = require("./models/fruits")
const veggies = require('./models/vegetables')
const reactViews = require('express-react-views')

app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine())


app.get("/fruits", (req, res) => {
  res.render('fruits/Index', {fruits})
})

app.get("/fruits/:indexOfFruit", (req, res) => {
  // res.send(fruits[req.params.indexOfFruit])
  res.render("fruits/Show", fruits[req.params.indexOfFruit])
})

app.get("/veggies", (req, res) => {
    res.render('veggies/Index', {veggies})
})
  
app.get("/veggies/:indexOfVeggies", (req, res) => {
    res.render("veggies/Show", veggies[req.params.indexOfVeggies])
})


app.listen(PORT, () => { 
  console.log(`Listening on port: ${PORT}`)
});