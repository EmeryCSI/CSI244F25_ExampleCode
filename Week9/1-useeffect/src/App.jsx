import { useState, useEffect } from "react";
import PostList from "./Components/PostList";

function App() {
  // State to store the posts we fetch from the API
  const [posts, setPosts] = useState([]);
  // State to track if we're currently loading data
  const [loading, setLoading] = useState(true);

  // useEffect runs after the component first renders
  // The empty dependency array [] means it only runs once when component mounts
  useEffect(() => {
    // Function to fetch posts from JSONPlaceholder API
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // Fetch data from the API
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        // Convert the response to JSON format
        const data = await response.json();
        // Update our state with the fetched posts
        setPosts(data);
      } catch (error) {
        // If something goes wrong, log the error
        console.error("Error fetching posts:", error);
      } finally {
        // Always set loading to false when done (success or error)
        setLoading(false);
      }
    };

    // Call the function to fetch posts
    fetchPosts();
  }, []); // Empty array means this effect runs only once on mount

  // Show loading message while fetching data
  if (loading) {
    return <div>Loading posts...</div>;
  }

  // Render the PostList component and pass posts as a prop
  return (
    <div>
      <h1>Posts from JSONPlaceholder</h1>
      <PostList posts={posts} />
    </div>
  );
}

export default App;
