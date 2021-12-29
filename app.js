const express = require('express');
const app = express(); 
const path = require('path');
const postRouter = require('./routes/post-routes');

const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(postRouter);

app.set('views','views');
app.set('view engine','ejs');

app.get('/index', (req,res) => {
    console.log("estoy en el metodo get ")
    res.render('index', {titulo: "Index", nombres: ["franco","matias","jose"]});
})

app.get('/download/:param', (req,res) => {
    res.download(__dirname + "/public/123.pdf")
})

// app.get('/post', (req,res) => {
//     res.status(200).json({message: "obtener un post"});
// })

// app.get('/post/:id/userid/:userid', (req,res) => {
//     // console.log(typeof(req.params));
//     console.log(req.params.id);
//     console.log(req.params.userid);
//     res.status(200).json(req.params);
// })

// app.get('/post', (req,res) => {
//     console.log(req.query);
//     // console.log(req.query.id);
//     // console.log(req.query.userid);
//     res.status(200).json(req.query);
// })

// app.post('/post', (req,res) => {
//     console.log(req.body);
//     console.log("id - " + req.body.id);
//     console.log("userid - " + req.body.userid);
//     res.status(200).json({message: "hola estoy en el server y soy un metodo post"});
// })

// app.put('/post', (req,res) => {
//     res.status(200).json({message: "hola estoy en el server y soy un metodo put"});
// })

// app.delete('/post', (req,res) => {
//     res.status(200).json({message: "hola  soy un metodo delete"});
// })


app.all('/all', (req,res) => {
    res.status(200).json({message: "hola soy todos los verbos http "});
})

const callback0 = function(req,res,next){
    console.log("callback0");
    next();
}
const callback1 = function(req,res,next){
    console.log("callback1");
    next();
}

const callback2 = function(req,res,next){
   console.log("callback2");
   res.send("Finalizado el flujo");
}

app.route('/postgetput')
  .get(function(req, res) {
    res.send('Get');
  })
  .post(function(req, res) {
    res.send('Add');
  })
  .put(function(req, res) {
    res.send('Update');
  })
  .delete(function(req, res) {
    res.send('Delete');
  });


app.get('/callbacks', [callback0,callback1,callback2] );


app.listen(port,'localhost', () => {
    console.log("app corriendo en el puerto " + port);
})