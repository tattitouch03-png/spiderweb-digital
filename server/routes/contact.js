const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// POST /api/contact
router.post('/', async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        // Basic validation (Mongoose will handle detailed validation)
        if (!name || !email || !phone || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const newMessage = new Message({
            name,
            email,
            phone,
            message
        });

        await newMessage.save();

        res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error('Error saving message:', error);
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({ error: messages.join(', ') });
        }
        res.status(500).json({ error: 'Server error: ' + error.message });
    }
});

module.exports = router;
