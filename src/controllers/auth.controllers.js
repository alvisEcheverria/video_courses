const AuthService = require("../Services/auth.services");
const jwt = require("jsonwebtoken");

const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const data = await AuthService.login(email, password);
    const userData = {
      id: data.result.id,
      firstName: data.result.firstName,
      email: data.result.email
    };
    const token = jwt.sign(userData, "user_courses", { algorithm: "HS512" });
    userData.token = token;
    if(data.isValid){
      res.json(userData);
    }
    res.json('Contraseña incorrecta.')
  } catch (error) {
    next({
      message: "Algo salio mal con la autenticación",
      status: 401,
      errorContent: error
    });
  }
};

module.exports = {
  userLogin,
};