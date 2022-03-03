import model from "../models/user.js";

const validData = (req, res, next) => {
  if (!req.body.name || !req.body.email || !req.body.password)
    return res.status(400).send({ message: "Incomplete Data" });

  next();
};

const existingEmail = async (req, res, next) => {
  const userFound = await model.findOne({ email: req.body.email });

  if (userFound && req.body._id != userFound._id)
    return res.status(400).send({ message: "Email already exists" });

  next();
};

export default { validData, existingEmail };