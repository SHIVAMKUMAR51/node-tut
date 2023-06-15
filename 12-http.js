const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('our history page')
    }
    //console.log(req)
    // res.write('welcome to my page')
    // res.end()
    res.end(`<h1>Ooops!</h1>
    <p>We can't find your page here</p>
    <a href = "/"> go back home </a>`)
    
})

server.listen(5000)
