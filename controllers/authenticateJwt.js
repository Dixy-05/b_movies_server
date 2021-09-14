const jwt = require('jsonwebtoken');

exports.authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log('authenticateJWT:', req.headers.authorization);

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(403).send({ error: err });
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).send({ error: 'Unauthorized' });
  }
};
