import mongoose from "mongoose";

const validateId = (req, res, next) => {
  let id = req.params["_id"] ? req.params["_id"] : req.body._id;

  if (!id) return res.status(400).send({ message: "Id don't inserted" });

  const isValid = mongoose.Types.ObjectId.validateId(id);

  return isValid ? next() : res.status(301).send({ message: "Invalid Id" });
};

export default validateId;