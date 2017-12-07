const Koa = require('koa');
const app = new Koa();

const HEROES = [
    { id: 1, name: 'Windstorm' },
    { id: 2, name: 'Bombasto' },
    { id: 3, name: 'Magneta' },
    { id: 4, name: 'Tornado' }
]

app.use(ctx => {
    ctx.body = HEROES[0];
});

app.listen(3000, () => { console.log('running on port 3000') });