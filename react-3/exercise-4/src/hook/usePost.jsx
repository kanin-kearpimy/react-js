import { useState } from "react";

const KEYS = ["id", "author", "avatar", "time", "content", "image"];

const postsData = [
  {
    id: "id-001",
    author: "User 1",
    avatar:
      "https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_640.png",
    time: "2 hours ago",
    content: "This is my first post! 🎉",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",
  },
  {
    id: "id-002",
    author: "User 2",
    avatar:
      "https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png",
    time: "4 hours ago",
    content: "Enjoying a beautiful day outdoors! ☀️",
    image:
      "https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png",
  },
  {
    id: "id-003",
    author: "User 3",
    avatar:
      "https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png",
    time: "1 day ago",
    content: "Exploring new places and cultures. 🌍✈️",
    image:
      "https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png",
  },
];

const usePost = () => {
  const [posts, setPosts] = useState(postsData);

  const create = (data) => {
    /**
     * Create a new post and add it to the list.
     * @param {id, author, avatar, time, content, image} data - The post data to be created.
     *
     */
    if (typeof data !== "object") {
      alert("Please input object of feed-post");
      return;
    }
    for (const key of KEYS) {
      if (!(key in data)) {
        alert(`Missing field ${key}`);
        return;
      }
    }

    setPosts((prev) => [...prev, data]);
  };

  const get = () => {
    /**
     * Retrieve the list of posts.
     * @returns {Array} The array of posts.
     * Example
     * const data = get()
     * variable: `data` is array of postsData above
     */
    return posts;
  };

  const update = (data) => {
    /**
     * Update an existing post in the list.
     * @param {id, author, avatar, time, content, image} data - The updated post data.
     */
    if (typeof data !== "object") {
      alert("Please input object of feed-post");
      return;
    }

    for (const key of KEYS) {
      if (!(key in data)) {
        alert(`Missing field ${key}`);
        return;
      }
    }

    const updatedData = posts.map((item) => {
      if (item.id === data.id) {
        return data;
      }
      return item;
    });

    setPosts(updatedData);
  };

  const remove = (id) => {
    /**
     * Removes a post with a specific ID from the list of posts and updates the state.
     * @param {string} id - The unique identifier of the post to be removed.
     * Example
     * remove('id-001') mean remove post which has `id` == 'id-001'
     */
    const updatedData = posts.filter((item) => item.id !== id);
    setPosts(updatedData);
  };

  return { create, update, remove, get };
};

export default usePost;
