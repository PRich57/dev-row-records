// Set variable isLoggedIn to true or false for favorite tab capabilities
function setLoginStatus(req, res, next) {
  if (req.session.loggedIn) {
    res.locals.isLoggedIn = true;
  } else {
    res.locals.isLoggedIn = false;
  }
  next();
}
module.exports = setLoginStatus;
