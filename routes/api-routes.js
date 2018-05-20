// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
// go. 
// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/hey/luis", function(req, res) {
    console.log("HEY LUIS WHAT'S UP?")
  });

  // GET route for getting all of the posts
  app.get("/api/posts/", function(req, res) {
    // GET ROUTES WILL GET DATA FROM YOUR DATABASE
    console.log('/api/posts/ WAS PINGED')
  });

  // Get route for returning posts of a specific category
  app.get("/api/posts/category/:category", function(req, res) {
    console.log('/api/posts/category/:category WAS PINGED')
    console.log('The category is: ', req.params.category)
    console.log('This route should return every post within the category ', req.params.category)
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    console.log('/api/posts/:id WAS PINGED')
    console.log('The id is: ', req.params.id)
    console.log('This route should return every post with the id ', req.params.id)
  });

  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    // POST ROUTES WILL POST NEW DATA TO THE SERVER OR DATABASE
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    // DELETE ROUTES WILL DELETE DATA FROM YOUR DATABASE
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    // PUT ROUTES WILL UPDATE EXISTING DATA ON YOUR DATABASE
  });
};
