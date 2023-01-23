const NeDB = require('nedb');
const db = new NeDB({
  filename: 'users.db',
  autoload: true,
})

module.exports = (app) => {

  const route = app.route('/users')
  const routeID = app.route('/user/:id')

  route.get((req, res) => {
    db.find({}).sort({ name: 1 }).exec((err, users) => {
      if (err) {
        app.utils.error.send(err, req, res);
      } else {
        res.status(200).json(users)
      }
    })
  })

  routeID.get((req, res) => {
    db.findOne({ _id: req.params.id }).exec((err, user) => {
      if (err) {
        app.utils.error.send(err, req, res);
      } else {
        res.status(200).json(user)
      }
    })
  })

  route.post((req, res) => {
    db.insert(req.body, (err, user) => {
      if (err) {
        app.utils.error.send(err, req, res);
      } else {
        res.status(200).json(user)
      }
    })
  })

  routeID.put((req, res) => {
    db.update({ _id: req.params.id }, req.body, err => {
      if (err) {
        app.utils.error.send(err, req, res);
      } else {
        res.status(200).json(req.body)
      }
    })
  })

  routeID.delete((req, res) => {
    db.remove({ _id: req.params.id }, {}, err => {
      if (err) {
        app.utils.error.send(err, req, res);
      } else {
        res.status(200).json(req.params)
      }
    })
  })
}
