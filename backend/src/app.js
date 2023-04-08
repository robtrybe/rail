const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/',(req, res) => {
    res.status(200).json({ 'status': 'ok'});
})

app.post('/user',(req, res) => {
    res.status(200).json({
        name:'Robson',
        sobrenome: 'Narcizo'
    })
});

module.exports = app;