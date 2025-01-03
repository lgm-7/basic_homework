import Joi from 'joi'; //데이터 검증 Joi사용
import { MESSAGES } from '../../constants/message.constant.js'; //message.constant.js에서 MESSAGES가져옴
import { MIN_RESUME_LENGTH } from '../../constants/resume.constant.js'; //resume.constant.js에서 MIN_RESUME_LENGTH가져옴

const schema = Joi.object({
  //객체로 사용 을 함수schema로 정의
  title: Joi.string().required().messages({
    //제목:문자열타입.필수.메세지
    'any.required': MESSAGES.RESUMES.COMMON.TITLE.REQUIRED, //MESSAGES의 RESUMES의 COMMON의 TITLE의 REQUIRED에 적힌 값
  }),
  content: Joi.string().min(MIN_RESUME_LENGTH).required().messages({
    //내용:문자열타입.최소치.필수.메세지
    'any.required': MESSAGES.RESUMES.COMMON.CONTENT.REQUIRED, //MESSAGES의 RESUMES의 COMMON의 CONTENT의 REQUIRED에 적힌 값
    'string.min': MESSAGES.RESUMES.COMMON.CONTENT.MIN_LENGTH, //MESSAGES의 RESUMES의 COMMON의 CONTENT의 MIN_LENGTH에 적힌 값
  }),
});

export const createResumeValidator = async (req, res, next) => {
  //createResumeValidator 내보낸다
  try {
    await schema.validateAsync(req.body); //body내용 검증
    next(); //성공하면 다음 미들웨어로
  } catch (error) {
    next(error); //실패하면 에러미들웨어로
  }
};
