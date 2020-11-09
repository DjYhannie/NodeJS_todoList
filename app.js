const express = require('express');
const app = express();

const bodyParser = require('body-parser');
// const { urlencoded } = require('body-parser');

// const jsdom = require('jsdom');
// const { JSDOM } = jsdom;

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(bodyParser.json());

let values = [{list:"zumba"},{list:"jogging"}];





app.get("/",(req,res)=>{
    res.render("index",{data:values});
});

app.post("/post",(req,res)=>{
    values.push(req.body);
    res.redirect('/');
});

app.post('/delete',(req, res)=>{
    // console.log(req.body);
    let todoId = req.body.id;
    values.splice(todoId, 1);
    res.redirect('/')
})

app.listen(8000);