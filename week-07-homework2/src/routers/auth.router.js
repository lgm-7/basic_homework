import express from 'express'; //express프레임 워크를 가져옴
import bcrypt from 'bcrypt'; //비밀번호 암호화
import jwt from 'jsonwebtoken'; //jwt토큰
import { HTTP_STATUS } from '../constants/http-status.constant.js'; //상태코드
import { MESSAGES } from '../constants/message.constant.js'; //메시지
import { signUpValidator } from '../middlewares/validators/sign-up-validator.middleware.js'; //회원가입 검증 미들웨어
import { signInValidator } from '../middlewares/validators/sign-in-validator.middleware.js'; //로그인 검증 미들웨어
import { prisma } from '../utils/prisma.util.js'; //프리즈마 클라이ㅓㄴ트
import {
  ACCESS_TOKEN_EXPIRES_IN,
  HASH_SALT_ROUNDS,
} from '../constants/auth.constant.js'; //인증 관련 상수
import { ACCESS_TOKEN_SECRET } from '../constants/env.constant.js'; //토큰 비밀키

const authRouter = express.Router(); //라우터 생성

authRouter.post('/sign-up', signUpValidator, async (req, res, next) => {
  //경로 /sign-up으로 post메소드 signUpValidator검증
  try {
    const { email, password, name } = req.body; //body에서 email, password, name 가져옴

    const existedUser = await prisma.user.findUnique({ where: { email } }); //db user테이블에서 동일한 이메일 찾기

    // 이메일이 중복된 경우
    if (existedUser) {
      return res.status(HTTP_STATUS.CONFLICT).json({
        //상태코드CONFLICT
        status: HTTP_STATUS.CONFLICT,
        message: MESSAGES.AUTH.COMMON.EMAIL.DUPLICATED,
      });
    }

    const hashedPassword = bcrypt.hashSync(password, HASH_SALT_ROUNDS); //비밀번호값 암호화

    const data = await prisma.user.create({
      //db user테이블에 data: { email,password: hashedPassword, name,}, 생성
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    data.password = undefined;

    return res.status(HTTP_STATUS.CREATED).json({
      //상태코드CREATED
      status: HTTP_STATUS.CREATED,
      message: MESSAGES.AUTH.SIGN_UP.SUCCEED,
      data,
    });
  } catch (error) {
    next(error); //실패하면 에러미들웨어로
  }
});

authRouter.post('/sign-in', signInValidator, async (req, res, next) => {
  //경로/sign-in으로 post메소드 signInValidator검증
  try {
    const { email, password } = req.body; //body에서 email, password 가져옴

    const user = await prisma.user.findUnique({ where: { email } }); //db user테이블에서 동일한 이메일 찾기

    const isPasswordMatched = //password 일치하는지 확인
      user && bcrypt.compareSync(password, user.password);

    if (!isPasswordMatched) {
      //일치하지않으면 상태코드UNAUTHORIZED
      return res.status(HTTP_STATUS.UNAUTHORIZED).json({
        status: HTTP_STATUS.UNAUTHORIZED,
        message: MESSAGES.AUTH.COMMON.UNAUTHORIZED,
      });
    }

    const payload = { id: user.id };

    const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, {
      //엑세스토큰
      expiresIn: ACCESS_TOKEN_EXPIRES_IN,
    });

    return res.status(HTTP_STATUS.OK).json({
      //상태코드OK
      status: HTTP_STATUS.OK,
      message: MESSAGES.AUTH.SIGN_IN.SUCCEED,
      data: { accessToken },
    });
  } catch (error) {
    next(error); //실패시 에러미들웨어로
  }
});

export { authRouter }; //모듈 내보내기
