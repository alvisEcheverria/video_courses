const jwt = require("jsonwebtoken");

const authVerification = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    token = token.replace("Bearer ", "");
    const isValid = jwt.verify(token, "user_courses", { algorithm: "HS512" });
    if (isValid) {
      next();
    }
  } catch (error) {
    next({
      message: "No se pudo verificar el token",
      status: 400,
      errorContent: error,
    });
  }
};

module.exports = authVerification;