const admin = require('firebase-admin');

// Initialize Firebase Admin SDK using environment variable
if (!admin.apps.length) {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://zri-info-tokens-default-rtdb.firebaseio.com"
    });
}

module.exports = async (req, res) => {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { username } = req.body;

    if (!username) {
        return res.status(400).json({ error: 'Username is required' });
    }

    try {
        // Generate a custom token for the given username
        const customToken = await admin.auth().createCustomToken(username);
        res.status(200).json({ customToken });
    } catch (error) {
        console.error('Error generating custom token:', error);
        res.status(500).json({ error: 'Failed to generate custom token', details: error.message });
    }
};