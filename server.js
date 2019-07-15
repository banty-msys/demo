const handler = require('serve-handler');
const http = require('http');
 
const server = http.createServer((request, response) => {    
    return handler(request, response, {
        "public": "build",
        "headers": [
            {
                "source" : "**/*",
                "headers" : [
                    {
                        "key" : "Cache-Control",
                        "value" : "no-cache, no-store, public"
                    }
                ]
            }
        ]
    })
})
 
server.listen(3001, () => {
    console.log('Running at http://localhost:3001');
})