const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();
const Mongoose = require('mongoose');

Mongoose.connect('mongodb://localhost/test',{useNewUrlParser:true});

var db = Mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log('Conectado ao banco de dados');
    var PeoplesSchema = new Mongoose.Schema({
        name:String
    });
    PeoplesSchema.methods.speak = ()=>{
        
    };
    var People = Mongoose.model('People',PeoplesSchema);

    var Mateus = new People({
        name: 'Mateus'
    })
    
    console.log(db.collections);
});

app.use(async ctx=>{
    ctx.body = "Hello World";

    
});



app.listen(3000);
console.log("Servidor On");