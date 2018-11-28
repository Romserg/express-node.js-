const express = require('express');
const bookRouter = express.Router();



function router(nav) {
  const books = [
    {
      title: 'War and Peace',
      genre: 'Historical',
      author: 'Tolstoy',
      read: false
    },
    {
      title: 'The Time Machine',
      genre: 'Science',
      author: 'Wells',
      read: false
    }
  ];
  bookRouter.route('/')
    .get((req, res) => {
      res.render(
        'bookListView',
        {
          nav,
          title: 'Library',
          books
        }
      );
    });

  bookRouter.route('/:id')
    .get((req, res) => {
      const { id } = req.params;
      res.render(
        'bookView',
        {
          nav,
          title: 'Library',
          book: books[id]
        }
      );
    });

  return bookRouter;
}


module.exports = router;