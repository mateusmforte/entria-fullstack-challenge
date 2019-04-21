const Koa = require('koa');
const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');
const initDB = require('./database');
const schema = require('./schema');

const app = new Koa();

initDB();

app.use(mount('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
})))

app.listen(5500);
console.log('Server on');
