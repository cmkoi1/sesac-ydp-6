const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');
dotenv.config({
    path: path.resolve(__dirname, '.env'),
}); 

const app = express();
const port = process.env.PORT; 

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(cookieParser(process.env.COOKIE_SECRET));
const cookieConfig = {
    httpOnly: true, 
    maxAge: 60 * 1000, 
    signed: true,
}

app.get('/', (req, res) => {
    res.render('cookie');
});

app.get('/setCookie', (req, res) => {
    res.cookie('myKeyTest', 'myValueTest', cookieConfig);
    res.send('Set signed cookie!');
})

app.get('/clearCookie', (req, res) => {
    res.clearCookie('myKeyTest', 'myValueTest', cookieConfig);
    res.send('Deleted signed cookie!');
})

app.get('/getCookie', (req, res) => {
    res.send(req.signedCookies);
})

app.listen(port, () => {
    console.log(`Sever is running! The port number is ${port} ...`);
    console.log('쿠키 비밀키: ', process.env.COOKIE_SECRET)
})