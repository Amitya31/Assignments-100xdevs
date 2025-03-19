const express = require('express')

const app = express();

// sending data using query
app.get('/sum',(req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    
    

    res.json({
        answer: a + b,
    })
})

// another way to send data is through routes
app.get('/multiply/:a/:b', (req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        answer: a + b,
    })
})

app.listen(3000);