const Koa = require('koa');
const mount = require('koa-mount');
const logger = require('koa-logger');
const cors = require('koa-cors');
const json = require('koa-json');
const bodyparser = require('koa-bodyparser');
const graphqlHTTP = require('koa-graphql');
const initDB = require('./database');
const schema = require('./schema');

const app = new Koa();
app.use(logger());
app.use(cors());
app.use(json());
app.use(bodyparser());

app.use(mount('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
})))
initDB();
app.listen(5500);
console.log('Server on');
