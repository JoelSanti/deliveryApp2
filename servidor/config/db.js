const mongosse = require('mongoose');
require('dotenv').config({path:'variables.env'})

const conectarDB = async ()=>{
    try{
	await mongosse.connect(process.env.DB_MONGO,{
	    useNewUrlParser: true,
	    useUnifiedTopology: true,
	});

	console.log('Base de datos conectada')

    }catch(e){
      console.log(e);
	process.exit(1)
    }
}

module.exports = conectarDB;
