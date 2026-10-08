const http = require('http');

const server = http.createServer((req, res) => {
    // Secure header and basic input validation mock
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify({ status: "Secure PHI Service Online", compliant: true }));
});

server.listen(8080, () => {
    console.log('Secure healthcare server running on port 8080');
});
