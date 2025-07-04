import jwt from "jsonwebtoken";

const userMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.log("No or invalid Authorization header");
    return res.status(401).json({ message: "Unauthorized: No token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token:", decoded);
    req.user = decoded; // Can access in your controller as req.user
    console.log("Token verified:", decoded);
    next();
  } catch (error) {
    console.error("Error verifying token:", error.message);
    res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

export default userMiddleware;
