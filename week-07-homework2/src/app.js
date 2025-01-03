import express from 'express'; //express프레임 워크를 가져옴
import { SERVER_PORT } from './constants/env.constant.js'; //env.constant.js에서 서버포트 가져옴
import { errorHandler } from './middlewares/error-handler.middleware.js'; //error-handler.middleware.js에서 에러헨들러 가져옴
import { HTTP_STATUS } from './constants/http-status.constant.js'; //http-status.constant.js에서 상태코드 가져옴
import { apiRouter } from './routers/index.js'; //routers/index.js에서 api라우터 가져옴

const app = express(); //app함수로 express()생성

app.use(express.json()); //json형태로 사용
app.use(express.urlencoded({ extended: true })); //url인코딩 사용

app.get('/health-check', (req, res) => {
  //경로/health-check로 get요청
  return res.status(HTTP_STATUS.OK).send(`I'm healthy.`); //상태코드 OK와 `I'm healthy.`메시지 보냄
});

app.use('/api', apiRouter); //경로 /api 로 api라우터 사용

app.use(errorHandler); //에러핸들러 사용

app.listen(SERVER_PORT, () => {
  //지정 서버포트로 서버 시작
  console.log(`서버가 ${SERVER_PORT}번 포트에서 실행 중입니다.`); //서버 실행중 콘솔 출력
});
