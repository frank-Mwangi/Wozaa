const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getFromLocalStorage = (key) => {
  let result = localStorage.getItem(key);
  if (key === "user_profile") {
    return result ? JSON.parse(result) : null;
  }
  return result ? JSON.parse(result) : [];
};
const removeFromLocalStorage = () => {
  localStorage.removeItem("user_profile");
  localStorage.removeItem("other_users");
  localStorage.removeItem("user_posts");
  localStorage.removeItem("following");
};

export { setLocalStorage, getFromLocalStorage, removeFromLocalStorage };
