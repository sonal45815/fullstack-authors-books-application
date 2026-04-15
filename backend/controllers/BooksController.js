const db = require('../configs/db');

function BooksController() {}

const getQuery = `
  SELECT
    b.id AS id,
    b.title AS title,
    b.releaseDate AS releaseDate,
    b.description AS description,
    b.pages AS pages,
    b.createdAt AS createdAt,
    b.updatedAt AS updatedAt,
    a.id AS authorId,
    a.name AS name,
    a.birthday AS birthday,
    a.bio AS bio
  FROM book b
  INNER JOIN author a ON b.authorId = a.id
`;

BooksController.prototype.get = (req, res) => {
  db.query(getQuery, (err, books) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        message: 'Error executing query.',
      });
    }

    return res.status(200).json({
      books,
    });
  });
};

BooksController.prototype.create = (req, res) => {
  const {
    title,
    description,
    releaseDate,
    pages,
    author: authorId,
  } = req.body;

  db.query(
    'INSERT INTO book (title, releaseDate, description, pages, authorId, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)',
    [title, releaseDate, description, pages, authorId],
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          message: 'Error executing query.',
        });
      }

      db.query(getQuery, (err, books) => {
        if (err) {
          console.error(err);
          return res.status(500).json({
            message: 'Error executing query.',
          });
        }

        return res.status(200).json({
          message: 'Book created successfully!',
          books,
        });
      });
    }
  );
};

BooksController.prototype.update = (req, res) => {
  const bookId = req.params.id;
  const {
    title,
    description,
    releaseDate,
    pages,
    author: authorId,
  } = req.body;

  db.query(
    'UPDATE book SET title = ?, releaseDate = ?, description = ?, pages = ?, authorId = ?, updatedAt = CURRENT_TIMESTAMP WHERE id = ?',
    [title, releaseDate, description, pages, authorId, bookId],
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          message: 'Error executing query.',
        });
      }

      db.query(getQuery, (err, books) => {
        if (err) {
          console.error(err);
          return res.status(500).json({
            message: 'Error executing query.',
          });
        }

        return res.status(200).json({
          message: 'Book updated successfully!',
          books,
        });
      });
    }
  );
};

BooksController.prototype.delete = (req, res) => {
  const bookId = req.params.id;

  db.query('DELETE FROM book WHERE id = ?', [bookId], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        message: 'Error executing query.',
      });
    }

    db.query(getQuery, (err, books) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          message: 'Error executing query.',
        });
      }

      return res.status(200).json({
        message: 'Book deleted successfully!',
        books,
      });
    });
  });
};

module.exports = new BooksController();
