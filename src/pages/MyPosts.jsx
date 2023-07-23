import { styled } from "styled-components";
import { useUserContext } from "../contexts/UserContext";

const MyPosts = () => {
  const { user_posts: posts } = useUserContext();

  return (
    <Wrapper>
      <div className="center-container">
        {posts.map((post) => {
          const { postId, image, name, username, postBody } = post;
          return (
            <div key={postId} className="post">
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
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .center-container {
    padding: 2rem 0;
  }
  .post {
    margin: 0 auto;
    padding: 1rem 2rem;
    background: var(--gray-50);
    width: 90vw;
    max-width: 600px;
    box-shadow: var(--shadow-1);
    border-radius: var(--border-radius-3);
    margin-bottom: 1rem;
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
`;
export default MyPosts;
