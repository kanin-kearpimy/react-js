import "./App.css";

function App() {
  return (
    <div id="app">
      <h1>Enter Data</h1>
      <PostContainer />
      <FeedSection />
    </div>
  );
}

const PostContainer = () => {
  return (
    <div class="post-container">
      <div class="post-header">
        <img class="post-avatar" src="avatar.jpg" alt="Your Avatar" />
        <div class="post-author">You</div>
      </div>
      <div class="post-content">
        <textarea
          class="post-input"
          placeholder="What's on your mind?"
        ></textarea>
      </div>
      <div class="post-actions">
        <button class="post-button">Post</button>
      </div>
    </div>
  );
};

const FeedSection = () => {
  return (
    <div class="feed">
      <div class="post">
        <div class="post-header">
          <img
            class="post-avatar"
            src="https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_640.png"
            alt="User 1"
          />
          <div>
            <div class="post-author">User 1</div>
            <div class="post-time">2 hours ago</div>
          </div>
        </div>
        <div class="post-content">This is my first post! 🎉</div>
        <img
          class="post-image"
          src="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"
          alt="Post 1"
        />
      </div>

      <div class="post">
        <div class="post-header">
          <img
            class="post-avatar"
            src="https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png"
            alt="User 2"
          />
          <div>
            <div class="post-author">User 2</div>
            <div class="post-time">4 hours ago</div>
          </div>
        </div>
        <div class="post-content">Enjoying a beautiful day outdoors! ☀️</div>
        <img
          class="post-image"
          src="https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png"
          alt="Post 2"
        />
      </div>

      <div class="post">
        <div class="post-header">
          <img
            class="post-avatar"
            src="https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png"
            alt="User 3"
          />
          <div>
            <div class="post-author">User 3</div>
            <div class="post-time">1 day ago</div>
          </div>
        </div>
        <div class="post-content">Exploring new places and cultures. 🌍✈️</div>
        <img
          class="post-image"
          src="https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png"
          alt="Post 3"
        />
      </div>
    </div>
  );
};

export default App;
