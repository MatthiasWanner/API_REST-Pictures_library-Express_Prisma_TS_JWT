import { AuthHandlers } from "../../../../env";

const logout: AuthHandlers["logout"] = (req, res, next) => {
  try {
    if (!req.cookies?.token) {
      return res.status(403).json({ message: "User not logged in." });
    }

    res.clearCookie("token");

    return res.status(200).json({ message: "User logged out." });
  } catch (e) {
    res.status(400);

    return next(e);
  }
};

export default logout;
