import express, { Router } from 'express';
import {
  updateUser,
  deleteUser,
  listUsers
} from '@controllers/user.controller';
import { verifyToken } from "@utils/verifyUser"
import { checkUserPermission } from '@middlewares/authorization';


const router: Router = express.Router();

router.post('/update/:id', verifyToken, checkUserPermission, updateUser);
router.delete('/delete/:id', verifyToken, checkUserPermission, deleteUser);
router.get('/list-users', listUsers);

export default router;
