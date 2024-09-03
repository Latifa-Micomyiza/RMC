const jwt = require('jsonwebtoken');
const User = require('../model/IntellectualModel');

const adminMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user || user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied' });
    }

    req.user = user; 
    next();
  } catch (error) {
    res.status(500).json({ error: 'Failed to authenticate' });
  }
};

module.exports = adminMiddleware;
