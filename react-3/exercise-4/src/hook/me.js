const users = [
  {
    author: "User 1",
    avatar:
      "https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_640.png",
  },
  {
    author: "User 2",
    avatar:
      "https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png",
  },
  {
    author: "User 3",
    avatar:
      "https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png",
  },
];

const getUser = () => {
  const index = Math.floor(Math.random() * 3);
  return users[index];
};

export { getUser };
