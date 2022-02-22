import model from "../models/role.js";

const validations = (req, res, next) => {
  validateData(req, res);
  existingRole(req, res, next);
};

const validateData = (req, res, next) => {
  if (!req.body.name || !req.body.description)
    return res.status(400).send({ message: "Incomplete data" });

  if (next) next();
};

const validRole = async (req, res, next) => {
  const role = await model.findOne({ name: "user" });

  if (!role) return res.status(404).send({ message: "Role not found" });

  req.body.role = role._id;

  if (next) next();
};

const existingRole = async (req, res, next) => {
  const role = await model.findOne({ name: req.body.name });

  if (role) return res.status(400).send({ message: "Role already exists" });

  if (next) next();
};

export default { validRole, validations, validateData };