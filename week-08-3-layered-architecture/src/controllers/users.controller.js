class UsersController {
  getUsers = (req, res, next) => {
    try {
      const data = req.user;

      return res.status(HTTP_STATUS.OK).json({
        status: HTTP_STATUS.OK,
        message: MESSAGES.USERS.READ_ME.SUCCEED,
        data,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default new UsersController();
