import { Request, Response } from 'express';
import Thought from '../models/Thought';

// Add a reaction to a thought
export const addReaction = async (req: Request, res: Response) => {
  try {
    const { thoughtId } = req.params;
    const reactionData = req.body;

    const updatedThought = await Thought.findByIdAndUpdate(
      thoughtId,
      { $push: { reactions: reactionData } },
      { new: true, runValidators: true }
    );

    if (!updatedThought) {
      return res.status(404).json({ error: 'Thought not found' });
    }

    res.json(updatedThought);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add reaction', details: error });
  }
};

// Remove a reaction from a thought
export const removeReaction = async (req: Request, res: Response) => {
  try {
    const { thoughtId, reactionId } = req.params;

    const updatedThought = await Thought.findByIdAndUpdate(
      thoughtId,
      { $pull: { reactions: { reactionId } } },
      { new: true }
    );

    if (!updatedThought) {
      return res.status(404).json({ error: 'Thought not found' });
    }

    res.json(updatedThought);
  } catch (error) {
    res.status(500).json({ error: 'Failed to remove reaction', details: error });
  }
};
