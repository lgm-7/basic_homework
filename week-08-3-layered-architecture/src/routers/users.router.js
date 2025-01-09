import express from 'express';
import { requireAccessToken } from '../middlewares/require-access-token.middleware.js';
import { HTTP_STATUS } from '../constants/http-status.constant.js';
import { MESSAGES } from '../constants/message.constant.js';
import usersController from '../controllers/users.controller.js';

const usersRouter = express.Router();

usersRouter.get('/me', requireAccessToken, usersController.getUsers);

export { usersRouter };
