//create the login and signup routes using express js
import express from 'express';
const app = express();
import session from 'express-session';

app.use(session({
    secret: 'anubhavjaiswal',
    resave: false,
    saveUninitialized: false
}));


app.get('/login', (req, res) => {
    req.session.user = {username: 'anubhav', email: 'anubhav@example.com'}
    res.send('User logged in');
});

app.get('/signup', (req, res) => {
    req.session.user = {username: 'newuser', email: 'newuser@example.com'}
    res.send('User signed up');
});