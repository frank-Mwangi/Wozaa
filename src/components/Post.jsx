import { styled } from "styled-components";
import { useFeedContext } from "../contexts/FeedContext";
import { useUserContext } from "../contexts/UserContext";
import PayWall from "./PayWall";

const Post = ({ feed }) => {
  const { randomIndex, randomisePost, count, handleFeedCount } =
    useFeedContext();
  const { isPremiumUser } = useUserContext();
  const feedLength = feed.length;
  const { image, name, username, postBody } = feed[randomIndex];
  if (count === 20 && !isPremiumUser) {
    return <PayWall />;
  }

  return (
    <Wrapper>
      <div className="center-container">
        <div className="post">
          <div className="post-header">
            <img className="profile-img" src={image} alt={name} />
            <div className="user-info">
              <h5 className="title">{name}</h5>
              <span className="user-username">@{username}</span>
            </div>
          </div>
          <hr />
          <div className="content">
            <p className="desc">{postBody}</p>
          </div>
          <div className="btn-container">
            <button
              onClick={() => {
                randomisePost(feedLength);
                handleFeedCount();
              }}
              className="toggle-posts-btn"
            >
              next post
            </button>
            <span className="count desc">{`${20 - count} post(s) left`}</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  margin-top: 4rem;
  .post {
    position: relative;
    margin: 0 auto;
    padding: 1rem 2rem;
    background: var(--gray-50);
    width: 90vw;
    max-width: 600px;
    box-shadow: var(--shadow-1);
    border-radius: var(--border-radius-3);
  }
  .post-header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .profile-img {
    width: 75px;
    height: 75px;
    border-radius: 50%;
  }
  .title {
    color: var(--primary-800);
  }
  .user-username {
    color: var(--primary-700);
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: var(--letter-spacing-2);
  }
  .btn-container {
    text-align: center;
  }
  .toggle-posts-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing-2);
    color: var(--primary-700);
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      color: var(--primary-600);
      border-bottom: 1px solid var(--primary-600);
    }
  }
  .count {
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
export default Post;
