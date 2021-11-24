
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hello my friend');
});

app.listen(3000, () => {
    console.log('server run on port 3000');
})