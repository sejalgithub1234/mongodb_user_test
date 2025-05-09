const User = require('../models/user');

// users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Fetch details of a specific user by MongoDB ObjectId
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send('User not found');
    res.json(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Add a new user and save it in MongoDB
exports.createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Update details of an existing user
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedUser) return res.status(404).send('User not found');
    res.json(updatedUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a user by MongoDB ObjectId
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).send('User not found');
    res.json(deletedUser);
  } catch (error) {
    res.status(500).send(error);
  }
};
