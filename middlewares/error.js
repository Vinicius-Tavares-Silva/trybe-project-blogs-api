module.exports = (err, _req, res, _next) => {
  try {
    if (err.status) {
      return res.status(err.status).send({ err });
    }
  
    res.status(500).end();
  } catch (error) {
    res.status(500).end('Unknown error');
  }
};