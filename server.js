const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path=require('path');
const ejs = require('ejs');
const collection=require('./mongodb')
const app = express();

const port = process.env.PORT || 5000

app.use(express.json())

app.set('view engine', 'ejs')
app.set('views')

app.get('/',(req,res) => {
    res.render("login to FriendZ")
})

app.get('/signup',(req,res) => {
    res.render("signup to FriendZ")
})

app.post("/signup", async (req,res) => {

    const data = {
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword
    }

    await collection.insertMany([data])

    res.render('home')

})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });