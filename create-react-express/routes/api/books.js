const router = require("express").Router();
const booksController = require("../../controllers/controller");

// Matches with "/api/books"
router.route("/books")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/books/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

  //Dont forget the refresh page route

module.exports = router;
