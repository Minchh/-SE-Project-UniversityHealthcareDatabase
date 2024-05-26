const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

function generateSecretKey(length = 32) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let key = '';
    for (let i = 0; i < length; i++) {
      // Shuffle the characters string on each iteration
      const shuffledCharacters = shuffleString(characters);
      key += shuffledCharacters.charAt(Math.floor(Math.random() * shuffledCharacters.length));
    }
    return key;
  }
  
  function shuffleString(str) {
    let arr = str.split('');
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
  }
  


const generateToken = (user) => {
    const payload = {
        id: user.id, // Assuming 'id' is the user's unique identifier
        email: user.email,
        // Add other user properties as needed
    };

    let randomNumber = Math.floor(Math.random() * (9999999999 - 1000000000 + 1) + 1000000000);
    const secret =  generateSecretKey();; // Replace with a secure secret key
    const options = {
        expiresIn: '1h', // Token expiration time (adjust as needed)
    };

    return jwt.sign(payload, secret, options);
};

module.exports = { generateToken };
