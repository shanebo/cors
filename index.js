module.exports = ({ allowlist, allowHeaders }) => {
  return (req, res, next) => {
    const origin = req.headers.origin;

    res.set('Origin', `${req.protocol}://${req.host}`);

    if (allowlist.includes(origin)) {
      res.set('Vary', 'Origin');
      res.set('Access-Control-Allow-Origin', origin);
      res.set('Access-Control-Allow-Credentials', 'true');
      res.set('Access-Control-Allow-Headers', allowHeaders);
    }

    if (req.method === 'OPTIONS') {
      res.end();
    } else {
      next();
    }
  };
}
