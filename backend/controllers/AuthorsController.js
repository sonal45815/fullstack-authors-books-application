const db = require('../configs/db');

function AuthorsController() {}

const getQuery = 'SELECT * FROM author';

AuthorsController.prototype.get = (req, res) => {
  db.query(getQuery, (err, authors) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        message: 'Error executing query.',
      });
    }

    return res.status(200).json({
      authors,
    });
  });
};

AuthorsController.prototype.create = (req, res) => {
  const { name, birthday, bio } = req.body;

  db.query(
    'INSERT INTO author (name, birthday, bio, createdAt, updatedAt) VALUES (?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)',
    [name, birthday, bio],
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          message: 'Error executing query.',
        });
      }

      db.query(getQuery, (err, authors) => {
        if (err) {
          console.error(err);
          return res.status(500).json({
            message: 'Error executing query.',
          });
        }

        return res.status(200).json({
          message: 'Author created successfully!',
          authors,
        });
      });
    }
  );
};

AuthorsController.prototype.update = (req, res) => {
  const authorId = req.params.id;
  const { name, birthday, bio } = req.body;

  db.query(
    'UPDATE author SET name = ?, birthday = ?, bio = ?, updatedAt = CURRENT_TIMESTAMP WHERE id = ?',
    [name, birthday, bio, authorId],
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          message: 'Error executing query.',
        });
      }

      db.query(getQuery, (err, authors) => {
        if (err) {
          console.error(err);
          return res.status(500).json({
            message: 'Error executing query.',
          });
        }

        return res.status(200).json({
          message: 'Author updated successfully!',
          authors,
        });
      });
    }
  );
};

AuthorsController.prototype.delete = (req, res) => {
  const authorId = req.params.id;

  db.query('DELETE FROM author WHERE id = ?', [authorId], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        message: 'Error executing query.',
      });
    }

    db.query(getQuery, (err, authors) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          message: 'Error executing query.',
        });
      }

      return res.status(200).json({
        message: 'Author deleted successfully!',
        authors,
      });
    });
  });
};

module.exports = new AuthorsController();
