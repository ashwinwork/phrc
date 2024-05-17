import * as jwt from 'jsonwebtoken';


const authenticate = (req, res, next) => {

  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: Token not provided' });
  }

  jwt.verify(token, process.env.JWT_SIGN_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }

    req.user = decoded;

    next();
  });
};

export default authenticate;
