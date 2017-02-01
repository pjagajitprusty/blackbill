var express = require('express')
var app = express()

app.use(express.static('./public'));
app.use(express.static('./node_modules/react-datepicker/dist'));


app.listen(3000, () => {console.log('App started on http://localhost:3000/');})
