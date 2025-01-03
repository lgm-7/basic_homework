import { HTTP_STATUS } from '../constants/http-status.constant.js'; //http-status.constant.js에서 HTTP_STATUS가져옴

export const errorHandler = (err, req, res, next) => {
  //errorHandler내보냄
  console.error(err); //콘솔로 에러출력

  // joi에서 발생한 에러 처리
  if (err.name === 'ValidationError') {
    return res.status(HTTP_STATUS.BAD_REQUEST).json({
      //상태코드 BAD_REQUEST
      status: HTTP_STATUS.BAD_REQUEST,
      message: err.message,
    });
  }

  // 그 밖의 예상치 못한 에러 처리
  return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
    //상태코드 INTERNAL_SERVER_ERROR
    status: HTTP_STATUS.INTERNAL_SERVER_ERROR,
    message: '예상치 못한 에러가 발생했습니다. 관리자에게 문의해 주세요.',
  });
};
