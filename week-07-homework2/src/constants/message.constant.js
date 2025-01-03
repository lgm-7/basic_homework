import { MIN_PASSWORD_LENGTH } from './auth.constant.js'; //auth.constant.js파일 정보 가져와 MIN_PASSWORD_LENGTH로 사용
import { MIN_RESUME_LENGTH } from './resume.constant.js'; //resume.constant.js파일 정보 가져와 MIN_RESUME_LENGTH로 사용

export const MESSAGES = {
  //messages함수 내보냄
  AUTH: {
    COMMON: {
      EMAIL: {
        REQUIRED: '이메일을 입력해 주세요.', //미입력
        INVALID_FORMAT: '이메일 형식이 올바르지 않습니다.', //이메일형태가 아닐 시
        DUPLICATED: '이미 가입 된 사용자입니다.', //같은 이메일 일 시
      },
      PASSWORD: {
        //비밀번호
        REQURIED: '비밀번호를 입력해 주세요.', //미입력
        MIN_LENGTH: `비밀번호는 ${MIN_PASSWORD_LENGTH}자리 이상이어야 합니다.`, //자릿수가 모자를 시
      },
      PASSWORD_CONFIRM: {
        //비밀번호 확인
        REQURIED: '비밀번호 확인을 입력해 주세요.', //미입력
        NOT_MACHTED_WITH_PASSWORD: '입력 한 두 비밀번호가 일치하지 않습니다.', //비밀번호에서 입력한 값과 같지 않을 시
      },
      NAME: {
        REQURIED: '이름을 입력해 주세요.', //미입력
      },
      UNAUTHORIZED: '인증 정보가 유효하지 않습니다.', //승인되지 않았을 시
      JWT: {
        NO_TOKEN: '인증 정보가 없습니다.', //인증토큰이 없을 시
        NOT_SUPPORTED_TYPE: '지원하지 않는 인증 방식입니다.', //인증토큰 타입이 다를 시
        EXPIRED: '인증 정보가 만료되었습니다.', //인증토큰 시간이 만료되었을 시
        NO_USER: '인증 정보와 일치하는 사용자가 없습니다.', //인증토큰정보의 유저가 지금 유저와 다를 시
        INVALID: '인증 정보가 유효하지 않습니다.', //인증토큰이 유효하지 않을 시
      },
    },
    SIGN_UP: {
      //가입 성공
      SUCCEED: '회원가입에 성공했습니다.',
    },
    SIGN_IN: {
      //로그인 성공
      SUCCEED: '로그인에 성공했습니다.',
    },
  },
  USERS: {
    READ_ME: {
      //내 정보 조회 성공
      SUCCEED: '내 정보 조회에 성공했습니다.',
    },
  },
  RESUMES: {
    COMMON: {
      TITLE: {
        //제목
        REQUIRED: '제목을 입력해 주세요.', //미입력 시
      },
      CONTENT: {
        //내용
        REQUIRED: '자기소개를 입력해 주세요.', //미입력 시
        MIN_LENGTH: `자기소개는 ${MIN_RESUME_LENGTH}자 이상 작성해야 합니다.`, //자릿수가 모자를 시
      },
      NOT_FOUND: '이력서가 존재하지 않습니다.', //이력서를 찾지 못했을 시
    },
    CREATE: {
      //이력서 작성 성공
      SUCCEED: '이력서 생성에 성공했습니다.',
    },
    READ_LIST: {
      //이력서 조회 성공
      SUCCEED: '이력서 목록 조회에 성공했습니다.',
    },
    READ_DETAIL: {
      //이력서 조회 실패
      SUCCEED: '이력서 상세 조회에 성공했습니다.',
    },
    UPDATE: {
      //이력서 수정 성공
      SUCCEED: '이력서 수정에 성공했습니다.',
      NO_BODY_DATA: '수정 할 정보를 입력해 주세요.', //미입력 시
    },
    DELETE: {
      //이력서 삭제 성공
      SUCCEED: '이력서 삭제에 성공했습니다.',
    },
  },
};
