import { Request, Response } from 'express';
import User from '../models/User';


export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find().populate('thoughts');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get users', details: err });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id).populate('thoughts');
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get user', details: err });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create user', details: err });
  }
};


export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete user', details: err });
  }
};
