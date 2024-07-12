const express = require('express');
const serverless = require('serverless-http');
const app = express();

const router = express.Router();

router.get('/greet', (req, res) => {
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;

    if (!firstName || !lastName) {
        return res.status(400).json({ error: 'Both firstName and lastName parameters are required' });
    }

    res.json({
        firstName: firstName,
        lastName: lastName
    });
});

app.use('/.netlify/functions/server', router);

module.exports.handler = serverless(app);
