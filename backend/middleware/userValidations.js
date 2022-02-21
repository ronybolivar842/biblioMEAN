import model from "../models/user.js";

const validations = (req, res, next) => {
  validData(req, res);
  existingEmail(req, res, next);
};

const validData = (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password)
    return res.status(400).send({ message: "Incomplete Data" });
  if (next) next();
};

const existingEmail = async (req, res, next) => {
  const userFound = await model.findOne({ email: req.body.email });

  if (userFound)
    return res.status(400).send({ message: "Email already exists" });

  if (next) next();
};

export default { validations };