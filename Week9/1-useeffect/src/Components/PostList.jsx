import PostItem from "./PostItem";

// PostList receives the posts array as a prop from App.jsx
function PostList({ posts }) {
  return (
    <div>
      <h2>Total Posts: {posts.length}</h2>
      {/* 
        Map through each post in the posts array
        For each post, render a PostItem component
        Pass the individual post object as a prop called "post"
        Use post.id as the key (React needs keys for lists)
      */}
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
