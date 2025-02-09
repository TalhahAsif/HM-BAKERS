import jwt from "jsonwebtoken";

export const generateToken = (userID, role) => {
  const token = jwt.sign({ userID, role }, JWT_SECRAT, {
    expiresIn: "7d",
  });
};
