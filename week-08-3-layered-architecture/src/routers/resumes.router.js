import express from 'express';
import { createResumeValidator } from '../middlewares/validators/create-resume-validator.middleware.js';
import { updateResumeValidator } from '../middlewares/validators/update-resume-validator.middleware.js';
import resumesController from '../controllers/resumes.controllers.js';

const resumesRouter = express.Router();

// 이력서 생성
resumesRouter.post('/', createResumeValidator, resumesController.createResumes);

// 이력서 목록 조회
resumesRouter.get('/', resumesController.getResumes);

// 이력서 상세 조회
resumesRouter.get('/:id', resumesController.detailGetResumes);

// 이력서 수정
resumesRouter.put(
  '/:id',
  updateResumeValidator,
  resumesController.updateResumes,
);

// 이력서 삭제
resumesRouter.delete('/:id', resumesController.deleteResumes);

export { resumesRouter };
