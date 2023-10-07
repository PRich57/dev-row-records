function setLoginStatus(req, res, next) {
  if (req.session.loggedIn) {
    res.locals.isLoggedIn = true;
  } else {
    res.locals.isLoggedIn = false;
  }
  next();
}
module.exports = setLoginStatus;
