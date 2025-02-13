export const Admin = (req, res, next) => {
    if (req.user.role !== "Admin") {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };
  
  export const ShopOwner = (req, res, next) => {
    if (req.user.role !== "ShopOwner") {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };
  export const Student = (req, res, next) => {
    if (req.user.role !== "Student") {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };
  