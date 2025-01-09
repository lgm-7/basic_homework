import authService from '../services/auth.service.js';

class AuthController {
  #service;

  constructor(service) {
    this.#service = service;
  }

  signup = async (req, res, next) => {
    try {
      const { email, password, name } = req.body;
      const data = await this.#service.signup(email, password, name);
      return res.status(data.status).json(data);
    } catch (error) {
      next(error);
    }
  };

  signin = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const data = await this.#service.signin(email, password);
      return res.status(data.status).json(data);
    } catch (error) {
      next(error);
    }
  };
}

export default new AuthController(authService);
