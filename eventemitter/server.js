import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
    // General request log
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);

    if (req.url == '/login') {
        console.log('User visited: /login');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2 style="color: purple;"> welcome to login page</h2>');
        res.end();
    } else if (req.url == '/home') {
        console.log('User visited: /home');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2 style="color: blue;"> welcome to home page</h2>');
        res.end();
    } else if (req.url == '/about') {
        console.log('User visited: /about');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2 style="color: green;"> welcome to about page</h2>');
        res.end();
    } else {
        console.log(`User visited unknown route: ${req.url}`);
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h2 style="color: red;">404 page not found</h2>');
        res.end();
    }
});

server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});