const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, '.env'),
}); 

const app = express();
const port = process.env.PORT; 

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true, 
        secure: false, 
        maxAge: 60 * 1000, 
    }
}))

app.get('/', (req, res) => {
    res.render('session');
})

app.get('/set', (req, res) => {
    if (req.query.name) {
        req.session.name = req.query.name;
        req.session.age = req.query.age;
    } else {
        req.session.name = '바나나';
        req.session.age = 10;
    }
    res.send('세션 설정 완료!');
})

app.get('/name', (req, res) => {
    console.log('req.session >> ', req.session);
    res.send({ id: req.sessionID, name: req.session.name });
})

app.get('/destroy', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            throw err;
        }
        res.redirect('/name');
    })
})

app.listen(port, () => {
    console.log(`Sever is running! The port number is ${port} ...   `);
});