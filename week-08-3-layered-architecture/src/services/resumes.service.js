import ResumesRepository from '../repositories/resumes.repository';
import { HTTP_STATUS } from '../constants/http-status.constant.js';
import { MESSAGES } from '../constants/message.constant.js';

class ResumesService {
  #repository;
  constructor(repository) {
    this.#repository = repository;
  }

  createResume = async (resumeData) => {
    const data = await this.#repository.createResume(resumeData);

    return {
      status: HTTP_STATUS.CREATED,
      message: MESSAGES.RESUMES.CREATE.SUCCEED,
      data,
    };
  };

  getResume = async (resumeData) => {
    sort = sort?.toLowerCase();

    if (sort !== 'desc' && sort !== 'asc') {
      sort = 'desc';
    }

    let data = await this.#repository.findManyResume(resumeData);

    data = data.map((resume) => {
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

    return {
      status: HTTP_STATUS.OK,
      message: MESSAGES.RESUMES.READ_LIST.SUCCEED,
      data,
    };
  };

  detailGetResume = async (resumeData) => {
    let data = await this.#repository.findUniqueResume(resumeData);

    if (!data) {
      return {
        status: HTTP_STATUS.NOT_FOUND,
        message: MESSAGES.RESUMES.COMMON.NOT_FOUND,
      };
    }

    data = {
      id: data.id,
      authorName: data.author.name,
      title: data.title,
      content: data.content,
      status: data.status,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };

    return {
      status: HTTP_STATUS.OK,
      message: MESSAGES.RESUMES.READ_DETAIL.SUCCEED,
      data,
    };
  };

  updateResume = async (resumeData) => {
    let existedResume = await this.#repository.findUniqueResume(resumeData);

    if (!existedResume) {
      return {
        status: HTTP_STATUS.NOT_FOUND,
        message: MESSAGES.RESUMES.COMMON.NOT_FOUND,
      };
    }

    const data = await this.#repository.updateResume(resumeData);

    return {
      status: HTTP_STATUS.OK,
      message: MESSAGES.RESUMES.UPDATE.SUCCEED,
      data,
    };
  };

  deleteResume = async (resumeData) => {
    let existedResume = await this.#repository.findUniqueResume(resumeData);
    if (!existedResume) {
      return {
        status: HTTP_STATUS.NOT_FOUND,
        message: MESSAGES.RESUMES.COMMON.NOT_FOUND,
      };
    }

    const data = await this.#repository.deleteResume(resumeData);

    return {
      status: HTTP_STATUS.OK,
      message: MESSAGES.RESUMES.DELETE.SUCCEED,
      data: { id: data.id },
    };
  };
}

export default new ResumesService(ResumesRepository);
