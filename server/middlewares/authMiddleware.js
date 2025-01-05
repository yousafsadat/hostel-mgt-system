const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
    // Check for token in Authorization header first
    const token = req.headers.authorization?.split(' ')[1] || req.cookies.auth_token;
    
    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.id; // Attach user info to request object
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = { protect };
