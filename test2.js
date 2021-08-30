const express = require('express')
const app = express()

app.get('', (req, res) => {
    res.send('<h1>Home page</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1>')
})

app.get('/faq', (req, res) => {
    res.send('<h1>Frequently Asked Questions</h1>')
})

app.listen(3000, () => {
    console.log('Server is up and running on PORT 3000.')
})