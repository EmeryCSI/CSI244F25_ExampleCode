// PostItem receives a single post object as a prop from PostList
function PostItem({ post }) {
  return (
    <div>
      <h3>
        Post #{post.id}: {post.title}
      </h3>
      <p>{post.body}</p>
      <p>
        <strong>User ID:</strong> {post.userId}
      </p>
      <hr />
    </div>
  );
}

export default PostItem;
