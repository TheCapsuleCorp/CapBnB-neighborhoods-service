const Neighborhood = require('../models/neighborhoods.js');

module.exports = {
  neighborhoods: {
    get: (req, res) => {
      const roomId = Number(req.params.guidebookId);
      Neighborhoods.find({ guidebookId })
        .then(neighborhoods => {
          res.json(neighborhoods);
        })
        .catch(err => {
          res.status(500).send(err);
        });
    },
    post: (req, res) => {
      res.status(405).send('Method not allowed.');
    },
    put: (req, res) => {
      res.status(405).send('Method not allowed.');
    },
    patch: (req, res) => {
      res.status(405).send('Method not allowed.');
    },
    delete: (req, res) => {
      res.status(405).send('Method not allowed.');
    }
  },
};
