var http = require('http')
var fs = require('fs')
var server = http.createServer(function (req, res) {

    if(req.url == '/') {
    
        fs.readFile('index.html', function (err, data) {

            res.write(data)
            res.end('Mesaj Gittiii')
    
        })
    }if(req.url=='/login') {
        
        fs.readFile('login.html', function (err, data) {

            res.write(data)
            res.end('Login sayfası ')
    
        })
    }
    
        
})

server.listen('8000') // 80 portunu internette kullandığım için 80 portunu kullanmadım

