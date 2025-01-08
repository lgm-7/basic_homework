import ResumesService from '../services/resumes.service';

class ResumesController {
  #service;

  constructor(service) {
    this.#service = service;
  }

  createResumes = async (req, res, next) => {
    try {
      const user = req.user;
      const { title, content } = req.body;
      const authorId = user.id;
      const data = await this.#service.createResume();

      return res.status(data.status).json(data);
    } catch (error) {
      next(error);
    }
  };

  getResumes = async (req, res, next) => {
    try {
      const user = req.user;
      const authorId = user.id;

      let { sort } = req.query;
      const data = await this.#service.getResumes();

      return res.status(data.status).json(data);
    } catch (error) {
      next(error);
    }
  };

  detailGetResumes = async (req, res, next) => {
    try {
      const user = req.user;
      const authorId = user.id;

      const { id } = req.params;

      const data = this.#service.detailGetResume();

      return res.status(data.status).json(data);
    } catch (error) {
      next(error);
    }
  };

  updateResumes = async (req, res, next) => {
    try {
      const user = req.user;
      const authorId = user.id;

      const { id } = req.params;

      const { title, content } = req.body;

      const data = await this.#service.updateResume();

      return res.status(data.status).json(data);
    } catch (error) {
      next(error);
    }
  };

  deleteResumes = async (req, res, next) => {
    try {
      const user = req.user;
      const authorId = user.id;

      const { id } = req.params;

      const data = await this.#service.deleteResume();

      return res.status(data.status).json(data);
    } catch (error) {
      next(error);
    }
  };
}

export default new ResumesController(ResumesService);
