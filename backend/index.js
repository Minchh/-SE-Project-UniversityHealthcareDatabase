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


// Save Profile Information
app.post('/saveProfile', (req, res) => {
    const { fullName, email, studentId, birthdate, phoneNumber, address } = req.body;

    const query = 'UPDATE users SET fullName = ?, studentId = ?, birthdate = ?, phoneNumber = ?, address = ? WHERE email = ?';
    const values = [fullName, studentId, birthdate, phoneNumber, JSON.stringify(address), email];

    db.query(query, values, (error, results) => {
        if (error) {
            return res.status(500).json({ message: 'Database update error' });
        }
        res.status(200).json({ message: 'Profile updated successfully' });
    });
});

// Change Password
app.post('/changePassword', async (req, res) => {
    const { currentPassword, newPassword, confirmPassword } = req.body;
    const userEmail = req.body.email; // Assuming email is sent in the request body

    if (newPassword !== confirmPassword) {
        return res.status(400).json({ message: 'New passwords do not match' });
    }

    db.query('SELECT password FROM users WHERE email = ?', [userEmail], async (error, results) => {
        if (error) {
            return res.status(500).json({ message: 'Database query error' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        const dbPassword = results[0].password;
        const isMatch = await bcrypt.compare(currentPassword, dbPassword);

        if (!isMatch) {
            return res.status(401).json({ message: 'Current password is incorrect' });
        }

        const hashedNewPassword = await bcrypt.hash(newPassword, 8);
        db.query('UPDATE users SET password = ? WHERE email = ?', [hashedNewPassword, userEmail], (error, results) => {
            if (error) {
                return res.status(500).json({ message: 'Database update error' });
            }
            res.status(200).json({ message: 'Password changed successfully' });
        });
    });
});

// Save Health Details
app.post('/saveHealthDetails', (req, res) => {
    const { bloodId, gender, height, weight, insuranceId, allergies, healthProblems } = req.body;
    const userEmail = req.body.email; // Assuming email is sent in the request body

    const query = 'UPDATE users SET bloodId = ?, gender = ?, height = ?, weight = ?, insuranceId = ?, allergies = ?, healthProblems = ? WHERE email = ?';
    const values = [bloodId, gender, JSON.stringify(height), JSON.stringify(weight), insuranceId, allergies, healthProblems, userEmail];

    db.query(query, values, (error, results) => {
        if (error) {
            return res.status(500).json({ message: 'Database update error' });
        }
        res.status(200).json({ message: 'Health details updated successfully' });
    });
});

// Save Privacy Settings
app.post('/savePrivacySettings', (req, res) => {
    const { email, activity, application, connections } = req.body;

    // You can further validate these fields if necessary
    const query = 'UPDATE users SET activitySettings = ?, applicationSettings = ?, connectionSettings = ? WHERE email = ?';
    const values = [JSON.stringify(activity), JSON.stringify(application), JSON.stringify(connections), email];

    db.query(query, values, (error, results) => {
        if (error) {
            console.error('Database update error:', error);
            return res.status(500).json({ message: 'Database update error' });
        }
        res.status(200).json({ message: 'Privacy settings updated successfully' });
    });
});

// Get History Data
app.get('/getHistory', (req, res) => {
    const userEmail = req.query.email; // Assuming email is sent as a query parameter

    const query = 'SELECT timestamp, contents FROM history WHERE email = ? ORDER BY timestamp DESC';
    const values = [userEmail];

    db.query(query, values, (error, results) => {
        if (error) {
            console.error('Database query error:', error);
            return res.status(500).json({ message: 'Database query error' });
        }
        res.status(200).json(results);
    });
});




port = 5001
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});