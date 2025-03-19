const express = require('express')

const app = express();

let requestCount = 0;

function requestInfo(req,res,next){
    const method = req.method;
    const date = new Date();
    requestCount = requestCount + 1;
    console.log(`method-${method} date-${date} requestCount-${requestCount}`)
    
    next();
    res.on('finish', () => {
        console.log(`Response Status: ${res.statusCode}`);
    });
}

app.use(requestInfo)

app.get('/sum', function(req,res){
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    res.json({
        ans : a + b,
    })
})

app.get('/subtract', function(req,res){
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    res.json({
        ans : a - b,
    })
})

app.get('/multiply', function(req,res){
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    res.json({
        ans : a * b,
    })
})

app.get('/divide', function(req,res){
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    res.json({
        ans : a / b,
    })  
})

app.listen(3000);