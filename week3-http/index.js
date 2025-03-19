const express = require('express')
const app = express()

function middleware(req,res,next){
    console.log('Method is' + req.method)
    console.log(`Original URL: ${req.originalUrl}`);
    console.log(new Date())
    next();
}

app.use(middleware)

app.get("/sum", function(req,res){

    const a = parseInt(req.query.a)
    const  b =  parseInt(req.query.b)
    res.json({
        ans: a+b,
    });
})

app.get('/multiply', (req,res)=>{

    const a= parseInt(req.query.a)
    const b= parseInt(req.query.b)
    res.json({
        ans:a*b,
    })
})
app.listen(3000)