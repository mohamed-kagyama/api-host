const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors('*'));

app.get('/',(req,res,next)=>{
    console.log(req.get('host'));
    res.send({'origin':req.get('host')})
})

app.listen(3000)