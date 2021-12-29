const express = require('express');
const postRouter = express.Router(); 
const  { postRouteMiddleware }  = require('../middleware/postRouteMiddleware');
console.log('postRouteMiddleware: ', postRouteMiddleware);

postRouter.use(postRouteMiddleware)

postRouter.get('/post/:id', (req,res) => {
    // var a = b ; 
    // console.log(req.params.id);
    // console.log(req.query.id);
    // console.log(req.query.userid);
    res.status(200).json(req.params);
})

postRouter.post('/post', (req,res) => {
    console.log(req.body);
    console.log("id - " + req.body.id);
    console.log("userid - " + req.body.userid);
    res.status(200).json({message: "hola estoy en el server y soy un metodo post y  estoy en un modulo!!"});
})



postRouter.put('/post', (req,res) => {
    res.status(200).json({message: "hola estoy en el server y soy un metodo put"});
})

postRouter.delete('/post', (req,res) => {
    res.status(200).json({message: "hola  soy un metodo delete"});
})

module.exports = postRouter;

