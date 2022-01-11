# Modelo proyecto express

## Crud de post implementando ORM Sequelize

-Model: Post 

```
Verbo http: GET     /api/post
Verbo http: GET     /api/post/:id 
Verbo http: GET     /api/post/:id/user //Retorna el post que tiene un usuario
Verbo http: POST    /api/post 
Verbo http: PUT     /api/post (TODO)
Verbo http: DELETE  /api/post (TODO)
```

-Model: User

```
Verbo http  GET     /api/users
Verbo http  GET     /api/user/:id
Verbo http  POST    /api/user
Verbo http  GET     /api/user/:id/posts    //Retorna todos los posts que tiene un usuario
Verbo http  GET     /api/users/count/posts //Retorna la cantidad de posts por usuario *estadistica*
Verbo http: PUT     /api/user (TODO)
Verbo http: DELETE  /api/user (TODO)
```

## Crud de usuario implementando SQL
```
Verbo http: GET     /users 
Verbo http: GET     /user/:id 
Verbo http: POST    /user 
Verbo http: PUT     /user 
Verbo http: DELETE  /user 
```

## Archivo "script-db.sql"
-Script base de datos modelo Usuario - Post

## Ejecutar el proyecto
- Crear archivo de configuracion del proyecto .env (se deja .env.example a modo de ejemplo) 
- Para correr el proyecto, ejecutar
```
>npm i 
>npm run dev
```

## Tarea con ORM
- Implementar los metodos para actualizar y borrar un usuario.
- Implementar los metodos para actualizar y borrar un post.
- Generar una respuesta tipo json para la salida con el resultado de las operaciones, y con respecto al UPDATE, por parametro se debera recibir el atributo a actualizar.

## Branch 07_seguridad 
- Implementación de autenticacion con hash de contraseña implementando bcrypt y json web token (jwt)


