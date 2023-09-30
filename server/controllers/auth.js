// Import required modules and libraries
const { connect } = require('getstream'); // GetStream SDK for server-side connection
const bcrypt = require('bcrypt'); // Library for hashing passwords
const StreamChat = require('stream-chat'); // Stream Chat SDK for user and channel management
const crypto = require('crypto'); // Node.js crypto library for generating random user IDs
const apiKey = process.env.STREAM_API_KEY; // Your GetStream API key
const apiSecret = process.env.STREAM_API_SECRET; // Your GetStream API secret
const appID = process.env.STREAM_APP_ID; // Your GetStream app ID

// Function to handle user login
const login = async (req, res) => {
    try {
        // Extract user_name and password from the request body
        const { user_name, password } = req.body;

        // Connect to GetStream server-side using your API key, API secret, and app ID
        const serverClient = connect(apiKey, apiSecret, appID);

        // Create a Stream Chat client instance
        const client = StreamChat.getInstance(apiKey, apiSecret);

        // Query the Stream Chat API to find users with the specified user_name
        const { users } = await client.queryUsers({ name: user_name });

        // If no users with the given user_name are found, return a 400 status with a message
        if (!users.length) {
            return res.status(400).json({ message: 'User not found.' });
        }

        // Compare the provided password with the hashed password stored in the database
        const success = await bcrypt.compare(password, users[0].hashPassword);

        // If the password is correct, create a user token and send it along with user information
        if (success) {
            const token = serverClient.createUserToken(users[0].id);
            res.status(200).json({
                token,
                fullName: users[0].name,
                user_name,
                userId: users[0].id,
            });
        } else {
            // If the password is incorrect, return a 500 status with an error message
            res.status(500).json({ message: 'Incorrect User' });
        }
    } catch (error) {
        // Handle any errors that occur during login and return a 500 status with an error message
        console.log(error);
        res.status(500).json({ message: error });
    }
};

// Function to handle user signup
const signup = async (req, res) => {
    try {
        // Extract user information from the request body
        const { name, user_name, email_address, phoneNumber, password } = req.body;

        // Generate a new random hexadecimal string of 16 digits for the user's ID
        const userId = crypto.randomBytes(16).toString('hex');

        // Connect to GetStream server-side using your API key, API secret, and app ID
        const serverClient = connect(apiKey, apiSecret, appID);

        // Hash the user's password for secure storage
        const hashPassword = await bcrypt.hash(password, 10);

        // Create a user token for the new user
        const token = serverClient.createUserToken(userId);

        // Return the user token and user information in the response
        res.status(200).json({
            token,
            name,
            user_name,
            userId,
            hashPassword,
            phoneNumber,
        });
    } catch (error) {
        // Handle any errors that occur during signup and return a 500 status with an error message
        console.log(error);
        res.status(500).json({ message: error });
    }
};

// Export the signup and login functions for use in other parts of your application
module.exports = { signup, login };
