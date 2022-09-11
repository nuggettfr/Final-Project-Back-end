const dbURL = 'mongodb+srv://luca:luca123@cluster0.bjtow6j.mongodb.net/?retryWrites=true&w=majority'
var express = require('path');
var bodyParser = require('body-parser')
var app = express();
var mongoose = require('mongoose');
mongoose.connet('mongodb/:localhost/test');

var publicFolder = path.join(__dirname,'public');

app.use(express.static(publicFolder));
app.use(bodyParser.urlencoded({ extended: true}))

var user = mongoose.model('user',{name: String, age:Number, 
    phonenumber:Number,Emailaddress:Emailaddress});

app.get('',(req, res)=>{
    res.render(publicFolder + '/index.html');
})

app.post('/page1.html',(req, res) =>{
    var user = new user({name: req.body.username, age: req.body.age,
    phonenumber: req.body.phonenumber,Emailaddress:req.body.Emailaddress});

    user.save().then(newUser => {
        res.send("created new user");
    }).catch(err => {
        res.send("something wrong");
    })

})
app.listen(3000,()=>{
    console.log("server is running on port 3000");
});

const express = require('express')
const mangoose = require('mongoose')
const routes = require ('./routes/score')
const cors = require('cors');
​
const app = express();
//use cors 
app.use(cors())
const port = 3000;

​
//connecting to the mongo cloud db through the mongoose package 
mangoose.connect(dbURL).then(() => {
    console.log("connected to the cloud")
}).catch((error) => { console.log(error) })
​
//in order to let express parse JSON 
app.use(express.json())
//routes 
app.use('/api',routes)
​
//starting the server at the port of your choice 
app.listen(process.env.PORT || port, () => {
    console.log("app is listening at port", port)
})
​

