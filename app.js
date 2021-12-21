var fs = require('fs')
var express = require('express')
var app = express()
app.get('/',function(req,res) {

    fs.readFile('index.html', function (err, data) {

        res.write(data)
        res.end('Mesaj Gönderildiiii')
        console.log('HomeController');

    })
})

app.get('/login',function(req,res) {
    
    fs.readFile('login.html', function (err, data) {

        res.write(data)
        res.end('Merhaba Ali Altinok')
        console.log('LoginController');

    })
})

app.listen(8000) // 80 portunu internette kullandığım için 80 portunu kullanmadım

