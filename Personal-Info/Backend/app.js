const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// MySQL Database Connection
const db = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '@Pqt22092003',  // replace with your MySQL password
    database: 'test'      // replace with your MySQL database name
});

db.connect((error) => {
    if (error) {
        console.log('Database connection failed:', error);
    } else {
        console.log('Connected to MySQL database');
    }
});

// Save User Profile Endpoint
app.post('/profile', (req, res) => {
    const { fullName, email, studentID, birthYear, birthMonth, birthDay, phoneNumber, countryCode, address, province } = req.body;
    
    // Construct the birthdate
    const birthdate = `${birthYear}-${birthMonth}-${birthDay}`;

    // Database query to insert the profile data
    const query = 'INSERT INTO profiles SET ?';
    const profileData = {
        fullName,
        email,
        studentID,
        birthdate,
        phoneNumber: `${countryCode}${phoneNumber}`,
        address,
        province
    };

    db.query(query, profileData, (error, results) => {
        if (error) {
            console.error('Error saving profile:', error);
            return res.status(500).json({ success: false, message: 'Failed to save profile' });
        }
        res.json({ success: true, message: 'Profile saved successfully' });
    });
});

// Get User Profile Endpoint
app.get('/profile/:email', (req, res) => {
    const { email } = req.params;

    db.query('SELECT * FROM profiles WHERE email = ?', [email], (error, results) => {
        if (error) {
            return res.status(500).json({ message: 'Database query error' });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Profile not found' });
        }

        res.json(results[0]);
    });
});

// Change password function

async function saveChangePassword(req, res) {
  const { oldPassword, newPassword } = req.body;

  // Find the user by email
  const user = await User.findOne({ email: req.user.email });

  // Compare the old password with the hashed password in the database
  const isMatch = await bcrypt.compare(oldPassword, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: 'Old password is incorrect' });
  }

  // Hash the new password
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  // Update the user's password in the database
  await User.updateOne({ email: req.user.email }, { password: hashedPassword });

  res.status(200).json({ message: 'Password changed successfully' });
}

// Health detail
const saveHealthDetails = (req, res) => {
    const { userID, bloodID, gender, height, heightUnit, weight, weightUnit, insuranceCardID, allergies, healthProblems } = req.body;
  
    // Database query to insert the health details data
    const query = 'INSERT INTO user_health_details SET ?';
    const healthDetailsData = {
      userID,
      bloodID,
      gender,
      height,
      heightUnit,
      weight,
      weightUnit,
      insuranceCardID,
      allergies,
      healthProblems
    };
  
    db.query(query, healthDetailsData, (error, results) => {
      if (error) {
        console.error('Error saving health details:', error);
        return res.status(500).json({ success: false, message: 'Failed to save health details' });
      }
      res.json({ success: true, message: 'Health details saved successfully' });
    });
  };

  //Privacy function
  const savePrivacy = (req, res) => {
    const { userID, emailNotifications, newsAnnouncements, weeklyHealthUpdates, weeklyBlogDigest, twitterConnection, googleConnection, facebookConnection, instagramConnection } = req.body;
  
    // Database query to insert the privacy settings data
    const query = 'INSERT INTO user_privacy SET ?';
    const privacyData = {
      userID,
      emailNotifications,
      newsAnnouncements,
      weeklyHealthUpdates,
      weeklyBlogDigest,
      twitterConnection,
      googleConnection,
      facebookConnection,
      instagramConnection
    };
  
    db.query(query, privacyData, (error, results) => {
      if (error) {
        console.error('Error saving privacy settings:', error);
        return res.status(500).json({ success: false, message: 'Failed to save privacy settings' });
      }
      res.json({ success: true, message: 'Privacy settings saved successfully' });
    });
  };

  //Endpoint
  
  app.post('/saveChangePassword', (req, res) => {
    saveChangePassword(req, res);
  });
  
  app.post('/saveHealthDetails', (req, res) => {
    saveHealthDetails(req, res);
  });
  
  app.post('/savePrivacy', (req, res) => {
    savePrivacy(req, res);
  });

const port = 5001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
