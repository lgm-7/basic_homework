import prisma from '../utils/prisma.util.js';

class AuthRepository {
  #prisma;
  constructor(prisma) {
    this.#prisma = prisma;
  }

  findUser = async (email) => {
    return await this.#prisma.user.findUnique({ where: { email } });
  };

  createUser = async (email, hashedPassword, name) => {
    return await this.#prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });
  };
}

export default new AuthRepository(prisma);
