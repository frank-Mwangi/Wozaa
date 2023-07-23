import { createContext, useContext, useState, useEffect } from "react";
import { usersUrl, postsUrl, albumsUrl, photosUrl } from "../utils/end_points";
import axios from "axios";

const FeedContext = createContext();
//Initialize empty feed
const initialState = {
  posts: [],
  isLoading: true,
  isError: false,
  randomIndex: 0,
  isSidebarOpen: false,
};

export const FeedProvider = ({ children }) => {
  const [feed, setFeed] = useState(initialState);
  const [count, setCount] = useState(0);
  const openSidebar = () => {
    setFeed((prevState) => {
      return { ...prevState, isSidebarOpen: true };
    });
  };
  const closeSidebar = () => {
    setFeed((prevState) => {
      return { ...prevState, isSidebarOpen: false };
    });
  };
  const fetchData = async () => {
    // begin fetching data
    setFeed((prevState) => {
      return { ...prevState, isLoading: true };
    });

    try {
      // fetching data asynchonously
      const { data: users } = await axios(usersUrl);
      const { data: posts } = await axios(postsUrl);
      const { data: albums } = await axios(albumsUrl);
      const { data: photos } = await axios(photosUrl);

      // creating a feed array from the data from the api
      const appFeed = posts.map((post) => {
        const { id: postId, body: postBody, userId } = post;
        const { name, username } = users.find((user) => user.id === userId);

        const { id: albumId } = albums.find((album) => album.userId === userId);
        //Pick a photo for user's thumbnail
        const { thumbnailUrl: image } = photos.find(
          (photo) => photo.albumId === albumId
        );

        return { postId, image, name, username, postBody };
      });
      setFeed((prevState) => {
        return { ...prevState, isLoading: false, feed: appFeed };
      });
    } catch (error) {
      setFeed((prevState) => {
        return { ...prevState, isLoading: false, isError: true };
      });
      console.log(error.response);
    }
  };
  //Display posts at random
  const randomisePost = (length) => {
    const randomIndex = Math.floor(Math.random() * length);
    setFeed((prevState) => {
      return { ...prevState, randomIndex };
    });
  };
  const handleFeedCount = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <FeedContext.Provider
      value={{
        ...feed,
        openSidebar,
        closeSidebar,
        randomisePost,
        count,
        handleFeedCount,
      }}
    >
      {children}
    </FeedContext.Provider>
  );
};

export const useFeedContext = () => {
  return useContext(FeedContext);
};
