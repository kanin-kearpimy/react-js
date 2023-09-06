const Post = (props) => {
  const { author, avatar, time, content, image } = props;
  return (
    <div className="post">
      <div className="post-header">
        <img className="post-avatar" src={avatar} alt={author} />
        <div>
          <div className="post-author">{author}</div>
          <div className="post-time">{time}</div>
        </div>
      </div>
      <div className="post-content">{content}</div>
      <img className="post-image" src={image} alt="Post 1" />
      <button>DELETE</button>
    </div>
  );
};

export default Post;
