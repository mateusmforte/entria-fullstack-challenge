const mongoose = require('mongoose');

const initDB = () => {
    const db = mongoose.connection;
    mongoose.connect(
        'mongodb+srv://tecchyno:RfHMRr8RU5DRYQ7j@cluster0-v0il4.gcp.mongodb.net/test?retryWrites=true',
        {useNewUrlParser:true}
    );
    db.on('error',console.error.bind(console,'connection error:'));
    db.once('open',function(){
        console.log("Banco de dados conectado");
    })
}


module.exports = initDB;