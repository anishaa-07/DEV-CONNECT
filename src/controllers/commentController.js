exports.getPostComments = (req, res) => {
    const postId = req.params.postId;  // also fix this
    res.send(`comments of post ${postId}`);
};