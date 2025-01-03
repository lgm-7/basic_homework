import Joi from 'joi'; //데이터 검증 Joi사용
import { MESSAGES } from '../../constants/message.constant.js'; //message.constant.js에서 MESSAGES가져옴
import { MIN_PASSWORD_LENGTH } from '../../constants/auth.constant.js'; //auth.constant.js에서 MIN_PASSWORD_LENGTH가져옴

const schema = Joi.object({
  //객체로 사용 을 함수schema로 정의
  email: Joi.string().email().required().messages({
    //문자열.이메일검증.필수.메세지
    'any.required': MESSAGES.AUTH.COMMON.EMAIL.REQUIRED, //MESSAGES의 AUTH의 COMMON의 EMAIL의 REQUIRED에 적힌 값
    'string.email': MESSAGES.AUTH.COMMON.EMAIL.INVALID_FORMAT, //MESSAGES의 AUTH의 COMMON의 EMAIL의 INVALID_FORMAT에 적힌 값
  }),
  password: Joi.string().required().min(MIN_PASSWORD_LENGTH).messages({
    //문자열.필수.최소값.메세지
    'any.required': MESSAGES.AUTH.COMMON.PASSWORD.REQURIED, //MESSAGES의 AUTH의 COMMON의 PASSWORD의 REQUIRED에 적힌 값
    'string.min': MESSAGES.AUTH.COMMON.PASSWORD.MIN_LENGTH, //MESSAGES의 AUTH의 COMMON의 PASSWORD의 MIN_LENGTH에 적힌 값
  }),
  passwordConfirm: Joi.string().required().valid(Joi.ref('password')).messages({
    //문자열.필수.가려짐.password와 비교.메세지
    'any.required': MESSAGES.AUTH.COMMON.PASSWORD_CONFIRM.REQURIED, //MESSAGES의 AUTH의 COMMON의 PASSWORD_CONFIRM의 REQUIRED에 적힌 값
    'any.only': MESSAGES.AUTH.COMMON.PASSWORD_CONFIRM.NOT_MACHTED_WITH_PASSWORD, //MESSAGES의 AUTH의 COMMON의 PASSWORD_CONFIRM의 NOT_MACHTED_WITH_PASSWORD에 적힌 값
  }),
  name: Joi.string().required().messages({
    //문자열.필수.메세지
    'any.required': MESSAGES.AUTH.COMMON.NAME.REQURIED, //MESSAGES의 AUTH의 COMMON의 NAME의 REQUIRED에 적힌 값
  }),
});

export const signUpValidator = async (req, res, next) => {
  //signUpValidator내보낸다
  try {
    await schema.validateAsync(req.body); //body내용 검증
    next(); //성공하면 다음 미들웨어
  } catch (error) {
    next(error); //실패하면 에러 미들웨어
  }
};
