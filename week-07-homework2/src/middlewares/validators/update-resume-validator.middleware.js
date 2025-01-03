import Joi from 'joi'; //데이터 검증 Joi사용
import { MESSAGES } from '../../constants/message.constant.js'; //message.constant.js에서 MESSAGES가져옴
import { MIN_RESUME_LENGTH } from '../../constants/resume.constant.js'; //resume.constant.js에서 MIN_RESUME_LENGTH가져옴

const schema = Joi.object({
  //객체로 사용 을 함수schema로 정의
  title: Joi.string(), //문자열
  content: Joi.string().min(MIN_RESUME_LENGTH).messages({
    //문자열.최솟값.메세지
    'string.min': MESSAGES.RESUMES.COMMON.CONTENT.MIN_LENGTH, //MESSAGES의 RESUMES의 COMMON의 CONTENT의 MIN_LENGTH에 적힌 값
  }),
})
  .min(1) //최솟값1
  .messages({
    //메세지
    'object.min': MESSAGES.RESUMES.UPDATE.NO_BODY_DATA, //MESSAGES의 RESUMES의 UPDATE의 NO_BODY_DATA에 적힌 값
  });

export const updateResumeValidator = async (req, res, next) => {
  //updateResumeValidator내보낸다
  try {
    await schema.validateAsync(req.body); //body내용 검증
    next(); //성공하면 다음 미들웨어
  } catch (error) {
    next(error); //실패하면 에러 미들웨어
  }
};
