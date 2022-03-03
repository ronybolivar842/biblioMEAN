import model from "../models/role.js";

const validateData = (req, res, next) => {
  if (!req.body.name || !req.body.description)
    return res.status(400).send({ message: "Incomplete data" });

  next();
};

const validRole = async (req, res, next) => {
  const role = await model.findOne({ name: "user" });

  if (!role) return res.status(404).send({ message: "Role not found" });

  req.body.role = role._id;

  next();
};

const existingRole = async (req, res, next) => {
  const role = await model.findOne({ name: req.body.name });

  if (role && req.body._id != role._id)
    return res.status(400).send({ message: "Role already exists" });

  next();
};

export default { validRole, validateData, existingRole };