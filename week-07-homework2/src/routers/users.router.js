import express from 'express'; //express프레임 워크를 가져옴
import { requireAccessToken } from '../middlewares/require-access-token.middleware.js'; //엑세스토큰 검증 미들웨어
import { HTTP_STATUS } from '../constants/http-status.constant.js'; //상태코드
import { MESSAGES } from '../constants/message.constant.js'; //메시지

const usersRouter = express.Router(); //라우터 생성

usersRouter.get('/me', requireAccessToken, (req, res, next) => {
  // 경로 /me에서 get메소드 requireAccessToken검증
  try {
    const data = req.user; //토큰에서 유저정보

    return res.status(HTTP_STATUS.OK).json({
      //상태코드OK
      status: HTTP_STATUS.OK,
      message: MESSAGES.USERS.READ_ME.SUCCEED,
      data,
    });
  } catch (error) {
    next(error); //실패시 에러미들웨어로
  }
});

export { usersRouter }; //모듈 내보내기
