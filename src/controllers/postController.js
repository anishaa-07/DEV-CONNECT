//using params

//GET/posts
// exports.getAllPosts= (req,res) => {
// res.send('All posts from controller');
// };

//Get/posts/:id
// exports.getPostById=(req,res) => {
//     const id = req.params.id;
//     res.send(`Post ID: ${id}`);
// };

//using query
// GET /posts (with optional query)
exports.getAllPosts = (req, res) => {
  res.json({
    success: true,
    message: 'All posts fetched'
  });
};
//Get/posts/:id
exports.getPostById = (req, res) => {
  res.json({
    success: true,
    message: `Post ${req.params.id} fetched`
  });
};
// POST /posts
exports.createPost = (req, res) => {
  res.status(201).json({
    success: true,
    message: "Post created",
    data: req.body
  });
};
// PATCH /posts/:id
exports.updatePost = (req, res) => {
  res.json({
    success: true,
    message: `Post ${req.params.id} updated`
  });
};
// DELETE /posts/:id
exports.deletePost = (req, res) => {
  res.json({
    success: true,
    message: `Post ${req.params.id} deleted`
  });
};

