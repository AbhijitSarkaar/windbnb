const path = require('path');
const express = require('express');

const app = express();
app.get('*.js', (req, res, next) => {
    req.url = req.url + '.br';
    res.set('Content-Encoding', 'br');
    res.set('Content-Type', 'application/javascript; charset=UTF-8');
    next();
});
app.use(express.static(path.join(__dirname, '../dist')));

app.set('port', process.env.PORT || 8080);

const server = app.listen(app.get('port'), () => {
    console.log('listening to port ', server.address().port);
});
