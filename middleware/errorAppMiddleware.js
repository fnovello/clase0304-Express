const errorAppMiddleware = function(err,req,res,next){
    console.log('err: ', err.stack);
    console.log('---------ERROR-------')
    res.status(500).send("Se rompio el servidor");
  }



module.exports = errorAppMiddleware;