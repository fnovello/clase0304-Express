const postRouteMiddleware = (req,res,next) => {
    console.log("Middleware de direccionador --- TIPO REQUEST---- " + req.method);
    res.header("soy-una-cabecera","soy un valor de header q estoy en un modulo")
    next(); 
}


module.exports = { postRouteMiddleware }