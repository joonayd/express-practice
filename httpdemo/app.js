const http = require("http")

http.createServer(function(req,res){
  
    
    switch(req.url){
        case "/" :
            res.write("<h1>My homepage</h1>")
            break
        case "/hobbies" :
            res.write("<h1>My hobbies</h1>")
            break
        default:
            res.write("page not found ")
            break;
    }

    res.end()
}).listen(3000)