const User = require('../models/User');

// Controller to register a user and add to the database
exports.userRegister = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: "Error creating user", error });
  }
};

// Controller to check if the user is present in the database or not
exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Assuming password is hashed, compare it here
    // e.g., if using bcrypt: const isMatch = await bcrypt.compare(password, user.password);
    const isMatch = password === user.password; // Replace with actual password comparison logic

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "User present", id: user._id });
  } catch (error) {
    res.status(500).json({ message: "Error logging in user", error });
  }
};

// Controller to get a user by their user ID
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({
      name: user.name,
      institute: user.institute,
      position: user.position,
      level: user.level,
      id: user._id
    });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving user", error });
  }
};
