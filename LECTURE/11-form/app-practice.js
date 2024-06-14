const express = require('express');
const app = express();
const PORT = 8889;

app.set('view engine', 'ejs');
app.set('views', './views'); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

