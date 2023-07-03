// // const http = require('http');

// // const PORT = 3000;

// // const server = http.createServer( function listener(request,response){
// //     if(request.url==='/')
// //         response.end("Welcome to the initial page");
    
// //     console.log("reqest received");
// // });


// // server.listen(PORT, function exec(){
// //     console.log(`Server is up and running on PORT ${PORT}`);

// // });
// const http = require('http');
// const fs = require('fs');

// const PORT = 3000;

// const server = http.createServer(function listener(request, response) {
//     if (request.url === '/') {
//         // Read the HTML file
//         fs.readFile('index.html', 'utf8', function (err, data) {
//             if (err) {
//                 // If there's an error reading the file, respond with an error message
//                 response.statusCode = 500;
//                 response.end('Internal Server Error');
//             } else {
//                 // Set the response header to indicate that the response contains HTML
//                 response.setHeader('Content-Type', 'text/html');
//                 // Send the HTML file as the response
//                 response.end(data);
//             }
//         });
//     } else {
//         // If the requested URL is not '/', respond with a 404 Not Found status code
//         response.statusCode = 404;
//         response.end('Not Found');
//     }

//     console.log('request received');
// });

// server.listen(PORT, function exec() {
//     console.log(`Server is up and running on PORT ${PORT}`);
// });



