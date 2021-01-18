const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello express');
});

app.get('/page1', (req, res) => {
    res.send('hello express page1');
});

app.listen(port, () => {
    console.log('Express listening on port' + port);
});