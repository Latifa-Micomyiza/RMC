const Intel = require('../model/IntellectualModel.js');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const register = async (req, res) => {
  try {
    // Destructure request body to extract all necessary fields
    const {
      FirstName,
      LastName,
      Gender,
      Email,
      Personalinfo,
      PhoneNumber,
      Country,
      Residence,
      DOB,
      SchoolName,
      Combination,
      FieldOfStudy,
      Degree,
      GraduationYear,
      OtherField,
      CurrentCarrier,
      Position,
      Location,
    } = req.body;

    // Check if a user with the same email already exists (case-insensitive)
    let user = await Intel.findOne({ Email: { $regex: new RegExp(`^${Email}$`, 'i') } });
    if (user) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const intel = new Intel({
      FirstName,
      LastName,
      Gender,
      Email,
      Personalinfo,
      PhoneNumber,
      Country,
      Residence,
      DOB,
      SchoolName,
      Combination,
      FieldOfStudy,
      Degree,
      GraduationYear,
      OtherField,
      CurrentCarrier,
      Position,
      Location,
    });

    // Save the new document to the database
    await intel.save();
    return res.status(201).json({ message: 'Intellectual registered successfully' });
  } catch (error) {
    // Log the error details for debugging purposes
    console.error('Error registering intellectual:', error.message);

    // Return a detailed error response
    return res.status(500).json({
      error: 'Failed to register user',
      message: error.message, // Include the error message in the response for better clarity
    });
  }
};

const getAllIntellectuals = async (req, res) => {
  try {
    // Fetch all intellectuals from the database
    const intellectuals = await Intel.find({});
    
    // Return the list of intellectuals as JSON
    return res.status(200).json(intellectuals);
  } catch (error) {
    // Log the error details for debugging purposes
    console.error('Error retrieving intellectuals:', error.message);

    // Return a detailed error response
    return res.status(500).json({
      error: 'Failed to retrieve intellectuals',
      message: error.message, // Include the error message in the response for better clarity
    });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  // Hardcoded credentials
  if (username === 'admin' && password === 'password') {
    // Create a token
    const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Respond with the token
    res.json({ token, username });
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }
};

module.exports = {
  register,
  getAllIntellectuals,
  login,
};
