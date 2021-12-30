# Modelo proyecto express


## Tarea 

A modo de ejemplo se encuentra la funcionalidad de agregar un post usando el verbo http POST, el metodo se llama "createPost", y recibe por body los parametros.

```
{
    "userId" : 1,
    "title" : "soy el titulo",
    "body" : "soy el body del post "
}
```

-En el js routes/post-routes.js se encuentran dos endpoints usando el verbo http GET, uno se llama "/post/:id" el cual se debe que crear la funcionalidad para que devuelva un post de acuerdo al id que le enviamos desde postman por parametro, si no se encuentra el post, retornar un mensaje con la situacion

-Ademas implementar el otro enpoint por GET "/post" que retorna todos los posts, que se encuentran en "/data/posts.json".

Las funcionalidades deben estar en el controlador "/controllers/postController.js".



- Para correr el proyecto, ejecutar
```
>npm i 
>npm run dev
```