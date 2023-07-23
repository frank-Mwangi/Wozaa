import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { usersUrl, postsUrl, albumsUrl, photosUrl } from "../utils/end_points";
import {
  setLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
} from "../utils/localStorage";

const UserContext = createContext();

const initialState = {
  other_users: getFromLocalStorage("other_users"),
  user_profile: getFromLocalStorage("user_profile"),
  user_posts: getFromLocalStorage("user_posts"),
  following: getFromLocalStorage("following"),
  isPremiumUser: false,
};
// const initialState = getFromLocalStorage("user");

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);
  const login = async (loginUser) => {
    // mimic as post request to the users table
    try {
      const { data: users } = await axios(usersUrl);
      const { data: posts } = await axios(postsUrl);
      const { data: albums } = await axios(albumsUrl);
      const { data: photos } = await axios(photosUrl);
      const { name, password } = loginUser;

      const authUser = users.find(
        (user) => user.name === name || user.email === name
      );
      if (!authUser) {
        toast.error("User doesn't exist");
        return;
      }
      const {
        id,
        name: auth_user_name,
        username,
        address: { zipcode },
        website,
        company: { name: company_name },
        phone,
      } = authUser;
      if (zipcode === password) {
        toast.success(`Welcome, ${username}`);
        let userPosts = posts.filter((post) => post.userId === id);
        userPosts = userPosts.map((post) => {
          const { id: postId, body: postBody, userId } = post;
          const { name, username } = users.find((user) => user.id === userId);

          const { id: albumId } = albums.find(
            (album) => album.userId === userId
          );
          //Pick a photo for user's thumbnail
          const { thumbnailUrl: image } = photos.find(
            (photo) => photo.albumId === albumId
          );

          return { postId, image, name, username, postBody };
        });
        let otherUsers = users.filter((user) => user.id !== id);
        otherUsers = otherUsers.map((user) => {
          const { id: userId, name, username, website } = user;
          const { id: albumId } = albums.find(
            (album) => album.userId === user.id
          );
          const { thumbnailUrl: image } = photos.find(
            (photo) => photo.albumId === albumId
          );

          return { userId, name, username, website, image };
        });
        setUser((prevState) => {
          return {
            ...prevState,
            other_users: otherUsers,
            user_profile: {
              auth_user_name,
              username,
              website,
              company_name,
              phone,
            },

            user_posts: userPosts,
          };
        });
        setLocalStorage("user_profile", {
          auth_user_name,
          username,
          website,
          company_name,
          phone,
        });
        setLocalStorage("other_users", otherUsers);
        setLocalStorage("user_posts", userPosts);
      } else {
        toast.error("Invalid password");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const followUser = async (userId) => {
    const { data: posts } = await axios(postsUrl);
    const { data: albums } = await axios(albumsUrl);
    const { data: photos } = await axios(photosUrl);
    const { other_users } = user;
    // console.log(other_users);
    let userPosts = posts.filter((post) => post.userId === userId);
    userPosts = userPosts.map((post) => {
      const { id: postId, body: postBody } = post;
      const { name, username } = other_users.find(
        (user) => user.userId === userId
      );
      const { id: albumId } = albums.find((album) => album.userId === userId);
      const { thumbnailUrl: image } = photos.find(
        (photo) => photo.albumId === albumId
      );

      return { postId, postBody, image, name, username };
    });
    // console.log(userPosts);
    setUser((prevState) => {
      setLocalStorage("following", [...user.following, userPosts]);
      return { ...prevState, following: [...user.following, userPosts] };
    });
  };
  const unFollowUser = (username) => {
    const newFollowers = user.following.filter((item) => {
      const { username: user_handle } = item[0];
      return username !== user_handle;
    });
    setUser((prevState) => {
      return { ...prevState, following: newFollowers };
    });
  };
  const validatePayment = () => {
    console.log(user.isPremiumUser);
    setUser((prevState) => {
      return { ...prevState, isPremiumUser: true };
    });
  };
  const logout = () => {
    setUser({
      other_users: [],
      user_profile: null,
      user_posts: [],
      following: [],
      isPremiumUser: false,
    });
    removeFromLocalStorage();
  };
  return (
    <UserContext.Provider
      value={{
        ...user,
        login,
        followUser,
        unFollowUser,
        validatePayment,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
