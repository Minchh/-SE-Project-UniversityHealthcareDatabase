const express = require('express');
const mysql = require("mysql");
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config({path: './.env'})



const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

db.connect((error) => {
    if(error) {
        console.log(error)
    } else {
        console.log("MYSQL Connected...")
    }
})

// app.get("/", (req, res) => {
//     res.send("<h1>Home Page</h1>")
// });

// Handle user register
app.post("/register", (req, res) => {
    // Validate and process registration data
    const { email, password} = req.body;

    db.query('SELECT email FROM users where email = ?', [email], async (error, results) => {
        if (error) {
            console.log(error);
        }
        if (results.length > 0) {
            return res.status(409).json({ message: "Email already in use" });
        } 

        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);

        db.query('INSERT INTO users SET ? ', {email: email, password: hashedPassword }, (error, results) => {
            if(error) {
                console.log(error);
            } else {
                console.log(results);
                return res.status(201).json({ message: "Registration successful" });
            }
        })

    });
});

// Handle user login
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    // Check if email exists and password is correct
    db.query('SELECT email FROM users where email = ?', [email], async (error, results) => {
        if (error) {
            console.log(error);
        }
        if (results.length > 0) {
            return res.render('register', {
                message: 'Email is already in use!'
            })
        } else if (password !== passwordConfirm) {
            return res.render('register', {
                message: 'Passwords do not match!'
            });
        }

        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);

        db.query('INSERT INTO users SET ? ', {name: name, email: email, password: hashedPassword }, (error, results) => {
            if(error) {
                console.log(error);
            } else {
                console.log(results);
                return res.render('register', {
                    message: 'User registered!'
                });
            }
        })

    });

    if (user) {
        // Generate a token and send it back
        const token = generateToken(user); // Implement token generation
        res.json({ token });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});




port = 5001
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});