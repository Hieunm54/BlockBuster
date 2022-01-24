import express from 'express';
import verify from '../verifyToken.js';
import ListController from '../controllers/list-controller.js';

const listController = new ListController();

const router = express.Router();

router.get('/',verify,listController.getList);
router.post('/',verify,listController.createList);
router.delete('/:id', verify,listController.deleteList);

export default router;