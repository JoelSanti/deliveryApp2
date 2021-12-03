const express = require('express'); 
const conectarDB = require('./config/db')
const cors = require('cors')
const bodyParser = require('body-parser');


//crear el servidor

const app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

conectarDB();

//habilitar cors
app.use(cors())

//Habilitar express.json 
app.use(express.json({extended: true}))

const PORT = process.env.PORT || 4000;
//importar rutas 


app.use('/api/restaurantes/registro',require('./routes/restaurantes/usuarios'))

app.use('/api/restaurantes/login',require('./routes/restaurantes/auth'))

app.use('/api/restaurantes/productos',require('./routes/restaurantes/productos'))



app.get('/',(req,res)=>{
    res.send('Hola mundou')
})


//Arrancar la aplicacion 
app.listen(PORT,()=>{
    console.log(`El servidor está funcionando en el puerto ${PORT}`)
})

 


















