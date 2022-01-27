const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost:27017/askbox')

const { User, Box, Question } = require('./model')

app.listen(8080, '0.0.0.0', function () {
    console.log('Server Started.')
})

app.get('/', (req, res) => {
    res.send('helloworld')
})

app.post('/api/login', async (req, res) => {
    console.log(req.body)
    const user = await User.findOne(
        { username: req.body.username }
    )
    if (!user) res.send({ succeed: false, message: "该用户不存在" })
    else if (user.password !== req.body.password) res.send({ succeed: false, message: "密码错误" })
    else res.send({ succeed: true })
}
)

app.post('/api/register',async (req,res)=>{
    try{
    const user = await User.create(
        { username: req.body.username,
        password: req.body.password}
        )
        res.send({ succeed: true })
    }catch(e){
        res.send({ succeed: false, message: e.message })
    }
        
})