import User from '../models/userModel.js';

export const loginUser = async (req, res) => {
  res.json({ mssg: 'login user' });
};

export const signupUser = async (req, res) => {
  res.json({ mssg: 'signup user' });
};
