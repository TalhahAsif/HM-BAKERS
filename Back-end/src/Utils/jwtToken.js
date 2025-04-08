import jwt from "jsonwebtoken";

export const generateToken = (userID, role, res) => {
  const token = jwt.sign({ userID, role }, process.env.JWT_SECRAT, {
    expiresIn: "7d",
  });
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: false,
    sameSite: "strict",
    secure: false,
  });

  return token;
};