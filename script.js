const express = require('express');
const app = express();
const path = require('path');
const port = 8080;

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")))



app.get("/home", (req, res) => {
    res.render('index.ejs'); 
});

app.get("/destinations",(req,res) => {
    res.render("destinations.ejs")
})

app.get("/contact",(req,res)=>{
    res.render("contact.ejs");
})

app.listen(port, () => {
    console.log(`App is listening to port ${port}`);
});

app.post("/contact",(req,res) => {
    res.redirect("/home")
})

app.get("/aboutus",(req,res) => {
    res.render("aboutus.ejs");
})
