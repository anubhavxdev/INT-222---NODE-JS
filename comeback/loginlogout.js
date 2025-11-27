import express from 'express';
import session from 'express-session';

const app = express();

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// Session setup
app.use(session({
    secret: 'anubhavjaiswal',
    resave: false,
    saveUninitialized: false
}));

// Route: login form (shows login form when not logged in, or welcome + logout when logged in)
app.get('/', (req, res) => {
    if (req.session.user) {
        res.send(`
            <p>Logged in as: ${req.session.user.username}</p>
            <form action="/logout" method="POST">
                <button type="submit">Logout</button>
            </form>
        `);
    } else {
        res.send(`
            <form action="/login" method="POST">
                Username: <input type="text" name="username" required /><br><br>
                Password: <input type="password" name="password" required /><br><br>
                <button type="submit">Login</button>
            </form>
        `);
    }
});

// Route: login handler
app.post('/login', (req, res) => {
    req.session.user = {
        username: req.body.username,
        password: req.body.password
    };

    res.send(`
        <p>User logged in as: ${req.session.user.username}</p>
        <form action="/logout" method="POST">
            <button type="submit">Logout</button>
        </form>
    `);
});

// Route: logout handler (POST from the logout button)
app.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.send('Error logging out');
        }
        res.redirect('/');
    });
});

// Optional: keep GET /logout for direct links
app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.send('Error logging out');
        }
        // res.send('User logged out');
        res.redirect('/');
    });
});

// Start the server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
