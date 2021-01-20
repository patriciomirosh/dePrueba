
# Pasos para correr el sistema.
 
# 1) Base de datos 
En su servidor de base de datos locales Mysql crear la base de datos node20_mysql.


# 2)Backend en node

Una vez descargada la carpeta,  agregar el archivo .env en la carpeta Nodejs enviado por mail y luego en la terminal de la carpeta correr npm install y luego ejecutar npm run dev y ya estara escuchando el servidor en el puerto 3050.

(el archivo .env nescesario para las credenciales del servidor fue enviado por mail.)

Una vez que se encuntra corriendo ejecutar la request  POST localhost:3050/Table/createtableregister  por Postman o algun otra herramienta de testing de api rest. para crear la tabla principal. O importar el archivo de base de datos adjunto en su servidor local mysql.




# 3) FronEnd  en  React

Estos son los archivos del front desarrollados en react, el archivo .env faltante para dar autenticacion a firebase para el registro y acceso de usuarios se los envie por mail.

Descargar la carpeta, en la terminal de la carpeta correr con npm install y luego agregar el archivo .env que fue enviado por mail, por ultimo iniciar la pagina con npm start



Ademas ya se encuentra desplegado en la pagina https://patriciomirosh.github.io/login/ la pagina del Front pero sino se realizan los pasos uno y dos no puede acceder a la base de datos.
El administrador que se encuentra en la pagina envia las request y accede a la ruta  localhost puerto 3050.


