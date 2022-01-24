import express from 'express';
import UserController from '../controllers/user-controller.js';
import verify from '../verifyToken.js';

const userController = new UserController();
const router = express.Router();

router.put('/:id',verify,  userController.updateUser);
router.delete('/:id',verify,  userController.deleteUser);
router.get('/find/:id',verify,  userController.getSingleUser);
router.get('/',verify,  userController.getAll);
router.get('/stats', verify, userController.getStat);


export default router;