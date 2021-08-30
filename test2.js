const fs = require('fs');
const http = require('http');
const express = require('express')
const app = express();

app.get('', (req, res) => {
    const file = fs.readFileSync('index.html', {encoding: 'utf8'});
    res.send(file);
})

app.get('/index.html', (req, res) => {
    const file = fs.readFileSync('index.html', {encoding: 'utf8'});
    res.send(file);
})

app.get('/about.html', (req, res) => {
    const file2 = fs.readFileSync('about.html', {encoding: 'utf8'});
    res.send(file2);
    
})

app.get('/faq.html', (req, res) => {
    const file3 = fs.readFileSync('faq.html', {encoding: 'utf8'});
    res.send(file3);
    
})

app.listen(3000, () => {
    console.log('Server is up and running on PORT 3000.')
})