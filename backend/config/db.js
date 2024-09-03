const mongoose = require('mongoose');

// Replace the URL with your MongoDB connection string
const dbURI = 'mongodb://localhost:27017/latifah';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Export the connection to use in other parts of the application
module.exports = mongoose.connection;
