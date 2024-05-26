const express = require('express');
const mysql = require("mysql");
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express();
const utils = require('./utils');


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
            console.log("Email already in use");
            console.log("Received request:", req.body);
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
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    // Check if email exists and password is correct
    db.query('SELECT email, password FROM users where email = ?', [email], async (error, result) => {
        if (result.length > 0) {
            const dbPassword = result[0].password; // Assuming result is an array of objects
            let hashedPassword = await bcrypt.hash(password, dbPassword); // Assuming bcrypt.hash takes password and salt as arguments

            // Compare the hashed password from the database with the provided password
            if (hashedPassword === dbPassword) {
                // Password matches
                const token = utils.generateToken(result); // Implement token generation
                res.status(200).json({ token });
            } else {
                res.status(401).json({ message: "Invalid credentials" });
            }
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    });
});




port = 5001
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});