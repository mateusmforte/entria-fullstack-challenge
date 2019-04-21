const mongoose = require('mongoose');
const dbUrl = 'mongodb+srv://tecchyno:RfHMRr8RU5DRYQ7j@cluster0-v0il4.gcp.mongodb.net/test?retryWrites=true'
const initDB = () => {
    const db = mongoose.connection;
    mongoose.connect(
        dbUrl,
        {useNewUrlParser:true}
    );
    db.on('error',console.error.bind(console,'connection error:'));
    db.once('open',function(){
        console.log("Banco de dados conectado");
    })
}


module.exports = initDB;