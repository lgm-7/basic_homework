import express from 'express'; //express프레임 워크를 가져옴
import { HTTP_STATUS } from '../constants/http-status.constant.js'; //상태코드
import { MESSAGES } from '../constants/message.constant.js'; //메시지
import { createResumeValidator } from '../middlewares/validators/create-resume-validator.middleware.js'; //생성 검증 미들웨어
import { prisma } from '../utils/prisma.util.js'; //프리즈마 클라이언트
import { updateResumeValidator } from '../middlewares/validators/update-resume-validator.middleware.js'; //수정 검증 미들웨어

const resumesRouter = express.Router(); //라우터 생성

// 이력서 생성
resumesRouter.post('/', createResumeValidator, async (req, res, next) => {
  // 경로 /로 post메소드 createResumeValidator검증
  try {
    const user = req.user; //토큰에서 user데이터 가져오기
    const { title, content } = req.body; //body에서 title, content 가져오기
    const authorId = user.id; //토큰 유저 id값 authorId로 설정

    const data = await prisma.resume.create({
      //db resume테이블에 데이터 생성
      data: {
        authorId,
        title,
        content,
      },
    });

    return res.status(HTTP_STATUS.CREATED).json({
      //상태코드CREATED
      status: HTTP_STATUS.CREATED,
      message: MESSAGES.RESUMES.CREATE.SUCCEED,
      data,
    });
  } catch (error) {
    next(error);
  }
});

// 이력서 목록 조회
resumesRouter.get('/', async (req, res, next) => {
  //경로 /로 get메소드
  try {
    const user = req.user; //토큰에서 user데이터 가져오기
    const authorId = user.id; //토큰 유저 id값 authorId로 설정

    let { sort } = req.query; //쿼리에서 sort

    sort = sort?.toLowerCase(); //소문자

    if (sort !== 'desc' && sort !== 'asc') {
      //내림차 오름차순??
      sort = 'desc';
    }

    let data = await prisma.resume.findMany({
      //db resume테이블에서 찾기
      where: { authorId }, //authorId 가 같은값
      orderBy: {
        //정렬
        createdAt: sort, //작성일순
      },
      include: {
        //author내용 포함
        author: true,
      },
    });

    data = data.map((resume) => {
      //map메소드 이용해 새로운 데이터 생성
      return {
        id: resume.id,
        authorName: resume.author.name,
        title: resume.title,
        content: resume.content,
        status: resume.status,
        createdAt: resume.createdAt,
        updatedAt: resume.updatedAt,
      };
    });

    return res.status(HTTP_STATUS.OK).json({
      //상태코드OK
      status: HTTP_STATUS.OK,
      message: MESSAGES.RESUMES.READ_LIST.SUCCEED,
      data,
    });
  } catch (error) {
    next(error); //실패시 에러미들웨어
  }
});

// 이력서 상세 조회
resumesRouter.get('/:id', async (req, res, next) => {
  //경로 /로 아이디값받아서 get메소드
  try {
    const user = req.user; //토큰에서 user데이터 가져오기
    const authorId = user.id; //토큰 유저 id값 authorId로 설정

    const { id } = req.params; // /:id 값

    let data = await prisma.resume.findUnique({
      //db resume테이블에서 찾기
      where: { id: +id, authorId }, //id가 params id값, 토큰 유저 id값
      include: { author: true }, //author내용 포함
    });

    if (!data) {
      //data가 없을시
      return res.status(HTTP_STATUS.NOT_FOUND).json({
        //상태코드NOT_FOUND
        status: HTTP_STATUS.NOT_FOUND,
        message: MESSAGES.RESUMES.COMMON.NOT_FOUND,
      });
    }

    data = {
      //데이터
      id: data.id,
      authorName: data.author.name,
      title: data.title,
      content: data.content,
      status: data.status,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };

    return res.status(HTTP_STATUS.OK).json({
      //상태코드OK
      status: HTTP_STATUS.OK,
      message: MESSAGES.RESUMES.READ_DETAIL.SUCCEED,
      data,
    });
  } catch (error) {
    next(error); //실패시 에러미들웨어로
  }
});

// 이력서 수정
resumesRouter.put('/:id', updateResumeValidator, async (req, res, next) => {
  //경로 /로 아이디값 받아서 put메소드 updateResumeValidator검증
  try {
    const user = req.user;
    const authorId = user.id;

    const { id } = req.params;

    const { title, content } = req.body;

    let existedResume = await prisma.resume.findUnique({
      where: { id: +id, authorId },
    });

    if (!existedResume) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({
        status: HTTP_STATUS.NOT_FOUND,
        message: MESSAGES.RESUMES.COMMON.NOT_FOUND,
      });
    }

    const data = await prisma.resume.update({
      //db resume테이블 내용수정
      where: { id: +id, authorId }, //id가 같은 곳
      data: {
        //데이터
        ...(title && { title }), //제목
        ...(content && { content }), //내용
      },
    });

    return res.status(HTTP_STATUS.OK).json({
      //상태코드OK
      status: HTTP_STATUS.OK,
      message: MESSAGES.RESUMES.UPDATE.SUCCEED,
      data,
    });
  } catch (error) {
    next(error); //실패시 에러미들웨어로
  }
});

// 이력서 삭제
resumesRouter.delete('/:id', async (req, res, next) => {
  //경로 /로 아이디값 받아서 delete메소드
  try {
    const user = req.user;
    const authorId = user.id;

    const { id } = req.params;

    let existedResume = await prisma.resume.findUnique({
      where: { id: +id, authorId },
    });

    if (!existedResume) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({
        status: HTTP_STATUS.NOT_FOUND,
        message: MESSAGES.RESUMES.COMMON.NOT_FOUND,
      });
    }

    const data = await prisma.resume.delete({ where: { id: +id, authorId } }); //db resume테이블에서 id값 같은 내용 삭제

    return res.status(HTTP_STATUS.OK).json({
      status: HTTP_STATUS.OK,
      message: MESSAGES.RESUMES.DELETE.SUCCEED,
      data: { id: data.id },
    });
  } catch (error) {
    next(error);
  }
});

export { resumesRouter };
