import prisma from '../utils/prisma.util.js';

class ResumesRepository {
  #prisma;
  constructor(prisma) {
    this.#prisma = prisma;
  }

  createResume = async (authorId, title, content) => {
    return await this.#prisma.resume.create({
      data: {
        authorId,
        title,
        content,
      },
    });
  };

  findManyResume = async (authorId) => {
    return await this.#prisma.resume.findMany({
      where: { authorId },
      orderBy: {
        createdAt: sort,
      },
      include: {
        author: true,
      },
    });
  };

  findUniqueResume = async (id, authorId) => {
    return await this.#prisma.resume.findUnique({
      where: { id: +id, authorId },
      include: { author: true },
    });
  };

  updateResume = async (id, authorId, title, content) => {
    return await this.#prisma.resume.update({
      where: { id: +id, authorId },
      data: {
        ...(title && { title }),
        ...(content && { content }),
      },
    });
  };

  deleteResume = async (id, authorId) => {
    return await this.#prisma.resume.delete({
      where: { id: +id, authorId },
    });
  };
}

export default new ResumesRepository(prisma);
