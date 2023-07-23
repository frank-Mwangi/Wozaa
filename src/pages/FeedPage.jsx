import { useFeedContext } from "../contexts/FeedContext";
import { Loading, Error, Post } from "../components";

const FeedPage = () => {
  const { isLoading: loading, isError: error, feed } = useFeedContext();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  // return feed
  return <Post feed={feed} />;
};

export default FeedPage;
