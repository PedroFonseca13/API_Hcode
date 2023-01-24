module.exports = {
  user: (app, req, res) => {
    req.assert('name', `name can't be empty`).notEmpty();
    req.assert('role', `role can't be empty`).notEmpty();

    const errors = req.validationErrors();

    if (errors) {
      app.utils.error.send(errors, req, res);
      return false
    } else {
      return true;
    }
  }
}
