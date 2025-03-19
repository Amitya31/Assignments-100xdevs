const express = require ('express')
const cors = require('cors');
const jwt = require('jsonwebtoken')
const path = require('path');

const JWT_SECRET = '232amitunnedueime123'
const app = express() //app instance


app.use(cors()); 

app.use(express.json())

function auth(req,res,next){
    const username = req.body.username;
    const password = req.body.password;

    if(users.find(user=>user.username === username && user.password === password)){
        res.send({
            message: 'already signed in'
        })
        return;
    }else{
        next();
    }
}



const users = [];

// function generateToken(){
//     const options = ['a','b','c','d','f','g','1','2','3','4','5','6','7','8','9']
//     let token = '';

//     for(i=0;i<=8;i++){
//         token = token + options[Math.floor(Math.random()*options.length)]
//     }

//     return token;
// }
app.post('/signup', function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    if(users.find(user=>user.username === username && user.password === password)){
        res.send({
            message: 'already signed in'
        })
        return;
    }
    users.push({
        username: username,
        password: password,
    })

    console.log(users)


    res.send({
        username: username,
        password: password,
        message:'You have successfully signed in'
    })

})

app.post('/signin',function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user=>user.username === username && user.password === password)

    if(user){

        const token = jwt.sign({
            username: username,
        }, JWT_SECRET);
        // const token = generateToken()
        // const user.token = token
        res.header("jwt",token);
        res.header("X-Test-Header", "This is a test")
        res.send({
            message:'you have successfully signed in',
            token
        })
    }else{
        res.status(403).send({
            message: 'this is invalid'
        })
    }
})

function auth(req,res,next){
    const token = req.headers.token;
    const decodedInformation = jwt.verify(token, JWT_SECRET)
    const username = decodedInformation.username

    if(username){
        req.username = username; //modified the request object
        next();
    }
    else{
        res.send({
            message: "It's Invalid"
        })
    }
}

app.get('/me', auth, function(req,res){
    const username = req.username;
    const foundUser = users.find(user=>user.username === username)
    // const foundUser = users.find(user=>user.token === token)
    
    res.send({
        username : foundUser.username, 
        password : foundUser.password,
        message : 'Welcome back'
    })
    
})

app.get('/todos', function(req,res){

})

app.listen(3000)


