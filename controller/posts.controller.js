const PostService = require('../service/posts.service');

class PostsController {
  postService = new PostService();

  //게시글 생성
  createPost = async (req, res, next) => {
    try {
      const { userId, nickname } = res.locals.user;
      const { title, content } = req.body;

      if (!title || !content || !userId || !nickname) {
        throw new Error('InvalidParamsError');
      }

      const createPostData = await this.postService.createPost(
        userId,
        nickname,
        title,
        content
      );
      res.status(201).json({ data: createPostData });
    } catch (error) {
      res.status(400).json({ errorMessage: error.message });
    }
  };

  //게시글 조회
  getPosts = async (req, res, next) => {
    const posts = await this.postService.findAllPost();

    res.status(200).json({ data: posts });
  };

  //게시글 상세조회
  getPostById = async (req, res, next) => {
    const { postId } = req.params;
    const post = await this.postService.findPostById(postId);

    res.status(200).json({ data: post });
  };
  //게시글 수정
  updatePost = async (req, res, next) => {
    const { postId } = req.params;
    const { title, content } = req.body;

    const updatePost = await this.postService.updatePost(
      postId,
      title,
      content
    );

    res.status(200).json({ data: updatePost });
  };
  //게시글 삭제
  deletePost = async (req, res, next) => {
    const { postId } = req.params;

    const deletePost = await this.postService.deletePost(postId);

    res.status(200).json({ data: deletePost });
  };
}

module.exports = PostsController;
