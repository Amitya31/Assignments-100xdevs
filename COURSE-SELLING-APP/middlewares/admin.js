const jwt = require('jsonwebtoken')
const {JWT_SECRET_ADMIN} = require('../config')

// function middleware(password){
//     return function(req,res,next){
//         const token = req.headers.token;
//     const decoded = jwt.verify(token,JWT_SECRET_ADMIN);

//     if(decoded){
//         req.adminId = decoded.id
//         next();
//     }else{
//         res.json({
//             message: "You are not signed in"
//         })
//     }
    
//     }

// }

// you can use middleware no matter who is logging in as the only thing that differs is password that is JWT_SECRET

function adminMiddleware(req,res,next){
    const token = req.headers.token;
    const decoded = jwt.verify(token,JWT_SECRET_ADMIN);

    if(decoded){
        req.adminId = decoded.id
        next();
    }else{
        res.json({
            message: "You are not signed in"
        })
    }
    
}

module.exports = {
    adminMiddleware: adminMiddleware,
}