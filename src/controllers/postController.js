exports.getAllPosts = (req, res) => {
  res.json({
    success: true,
    posts: global.devConnectPosts || []
  });
};

exports.getPostById = (req, res) => {
  const posts = global.devConnectPosts || [];
  const post = posts.find(p => p.id === req.params.id);
  if (!post) return res.status(404).json({ success: false, message: 'Post not found' });
  res.json({ success: true, post });
};

exports.createPost = (req, res) => {
  if (!global.devConnectPosts) global.devConnectPosts = [];
  const post = {
    id: Date.now().toString(),
    content: req.body.content,
    author: req.body.author || 'Anonymous',
    createdAt: new Date().toISOString()
  };
  global.devConnectPosts.unshift(post);
  res.status(201).json({ success: true, message: 'Post created', data: post });
};

exports.updatePost = (req, res) => {
  const posts = global.devConnectPosts || [];
  const idx = posts.findIndex(p => p.id === req.params.id);
  if (idx === -1) return res.status(404).json({ success: false, message: 'Post not found' });
  posts[idx] = { ...posts[idx], ...req.body };
  res.json({ success: true, message: `Post ${req.params.id} updated` });
};

exports.deletePost = (req, res) => {
  if (!global.devConnectPosts) return res.status(404).json({ success: false });
  global.devConnectPosts = global.devConnectPosts.filter(p => p.id !== req.params.id);
  res.json({ success: true, message: `Post ${req.params.id} deleted` });
};
