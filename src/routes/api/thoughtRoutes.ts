import { Router } from 'express';
import {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  // Optional: addReaction, removeReaction
} from '../controllers/thoughtController';

const router = Router();

router.get('/', getThoughts);
router.get('/:id', getThoughtById);
router.post('/', createThought);
router.put('/:id', updateThought);
router.delete('/:id', deleteThought);

export default router;
