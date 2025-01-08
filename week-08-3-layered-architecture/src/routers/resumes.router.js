import express from 'express';
import { createResumeValidator } from '../middlewares/validators/create-resume-validator.middleware.js';
import { updateResumeValidator } from '../middlewares/validators/update-resume-validator.middleware.js';
import ResumesController from '../controllers/resumes.controllers.js';

const resumesRouter = express.Router();

// 이력서 생성
resumesRouter.post('/', createResumeValidator, ResumesController.createResumes);

// 이력서 목록 조회
resumesRouter.get('/', ResumesController.getResumes);

// 이력서 상세 조회
resumesRouter.get('/:id', ResumesController.detailGetResumes);

// 이력서 수정
resumesRouter.put(
  '/:id',
  updateResumeValidator,
  ResumesController.updateResumes,
);

// 이력서 삭제
resumesRouter.delete('/:id', ResumesController.deleteResumes);

export { resumesRouter };
