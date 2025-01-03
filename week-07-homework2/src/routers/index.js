import express from 'express'; //express프레임 워크를 가져옴
import { authRouter } from './auth.router.js'; //인증라우터가져옴
import { usersRouter } from './users.router.js'; //유저라우터가져옴
import { resumesRouter } from './resumes.router.js'; //이력서라우터가져옴
import { requireAccessToken } from '../middlewares/require-access-token.middleware.js'; //엑세스 토큰 검증 미들웨어 가져옴

const apiRouter = express.Router(); //api라우터 생성

apiRouter.use('/auth', authRouter); //경로 /auth로 인증라우터사용
apiRouter.use('/users', usersRouter); //경로 /users로 유저라우터사용
apiRouter.use('/resumes', requireAccessToken, resumesRouter); //경로/resumes로 엑세스토큰검증후 이력서라우터사용

export { apiRouter }; //모듈 내보내기
