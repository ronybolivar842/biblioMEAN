import role from "../models/role.js";

const registerRole = async (req, res) => {
  const { name, description } = req.body;

  let schema = new role({ name, description });

  let result = await schema.save();

  if (!result)
    return res.status(500).send({ message: "Failed to register role" });

  res.status(200).send({ result });
};

const listRole = async (req, res) => {
  const roles = await role.find({ name: new RegExp(req.params["name"]) });
  return roles.length === 0
    ? res.status(400).send({ message: "No search result" })
    : res.status(200).send({ roles });
};

export default { registerRole, listRole };
