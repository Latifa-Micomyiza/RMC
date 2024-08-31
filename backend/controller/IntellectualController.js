const Intel = require('../model/IntellectualModel');


const register = async (req, res) => {
  try {
    const newIntel = new Intel({
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      Gender: req.body.Gender,
      Email: req.body.Email,
      Personalinfo: req.body.Personalinfo,
      PhoneNumber: req.body.PhoneNumber,
      Country: req.body.Country,
      Residence: req.body.Residence,
      DOB: req.body.DOB,
      SchoolName: req.body.SchoolName,
      Combination: req.body.Combination,
      FieldOfStudy: req.body.FieldOfStudy,
      Degree: req.body.Degree,
      GraduationYear: req.body.GraduationYear,
      OtherField: req.body.OtherField,
      CurrentCarrier: req.body.CurrentCarrier,
      Position: req.body.Position,
      Location: req.body.Location,
    });

    await newIntel.save();
    res.status(201).json({ message: 'Intellectual registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
  }
};


const getAllIntellectuals = async (req, res) => {
    const tester= 'pass'
  const { password } = req.body;

  if (password !== tester) {
    return res.status(401).json({ error: 'Invalid password' }); // Return immediately if password is incorrect
  }

  try {
    const intellectuals = await Intel.find({});
    return res.render('intellectuals', { intellectuals }); // Render the view with intellectuals data
  } catch (error) {
    console.error('Error retrieving intellectuals:', error);
    return res.status(500).json({ error: 'Failed to retrieve intellectuals' }); // Handle any errors
  }
}

module.exports = {
  register,
  getAllIntellectuals,
};


module.exports = {
  register,
  getAllIntellectuals,
};
