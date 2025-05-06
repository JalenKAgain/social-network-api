import { Request, Response } from 'express';
import Thought from '../models/Thought';


export const getThoughts = async (_req: Request, res: Response) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get thoughts', details: err });
  }
};


