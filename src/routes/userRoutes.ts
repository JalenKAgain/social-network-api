import { Router } from 'express';
import {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  // Add more controllers like updateUser, addFriend, etc.
} from '../controllers/userController';

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.delete('/:id', deleteUser);

export default router;
