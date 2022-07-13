const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => { res.sendFile(__dirname + '/bmi.html') });

app.post('/', (req, res) => {
    var resu = (Number(req.body.num1) + Number(req.body.num2)).toString()
    res.send(resu)
});
app.listen(3000, () => { console.log('helloed worlded'); })