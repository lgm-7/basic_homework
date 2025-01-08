import express from 'express';
import { requireAccessToken } from '../middlewares/require-access-token.middleware.js';
import { HTTP_STATUS } from '../constants/http-status.constant.js';
import { MESSAGES } from '../constants/message.constant.js';
import UsersController from '../controllers/users.controller.js';

const usersRouter = express.Router();

usersRouter.get('/me', requireAccessToken, UsersController.getUsers);

export { usersRouter };
