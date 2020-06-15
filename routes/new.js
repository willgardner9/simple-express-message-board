var express = require('express');
var router = express.Router();
var moment = require('moment');
const messages = require('../api/data');

/* GET new page. */
router.get('/', function(req, res, next) {
    res.render('new', { title: 'Write message' });
})

/* POST new page. */
router.post('/', function(req, res, next) {
    const newMessage = {
        text: req.body.text,
        user: req.body.user,
        formatted: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')
    }

    messages.push(newMessage);

    res.redirect('./');
})

module.exports = router;


/*

exports.book_create_post = [

  body('title', 'Title must not be empty.').trim().isLength({ min: 1 }),
  body('author', 'Author must not be empty.').trim().isLength({ min: 1 }),
  body('summary', 'Summary must not be empty.').trim().isLength({ min: 1 }),
  body('isbn', 'ISBN must not be empty').trim().isLength({ min: 1 }),

  sanitizeBody('*').escape(),

  (req, res, next) => {

      const errors = validationResult(req);

      let book = new Book(
        { title: req.body.title,
          author: req.body.author,
          summary: req.body.summary,
          isbn: req.body.isbn,
          genre: req.body.genre
         });

      if (!errors.isEmpty()) {

          async.parallel({
              authors: function(callback) {
                  Author.find(callback)
                  .lean();
              },
              genres: function(callback) {
                  Genre.find(callback)
                  .lean();
              },
          }, function(err, results) {
              if (err) { return next(err); }

              res.render('book_form', { title: 'Create Book', authors:results.authors, genres:results.genres, book: book, errors: errors.array() });
          });
          return;
      }
      else {
          book.save(function (err) {
              if (err) { return next(err); }
              res.redirect('/catalog/books/');
              });
      }
  }
];
*/