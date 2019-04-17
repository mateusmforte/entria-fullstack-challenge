const Koa =  require('koa');
const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');
const schema = require('./graphql/schema');
const initDB = require('./database');

const app = new Koa();

app.listen(9000);
console.log('Server iniciado na porta 9000');
initDB();
app.use(mount('/graphql',graphqlHTTP({
    schema:schema,
    graphiql:true
})))

app.on('error',err=>{
    log.error('server error',err)
});