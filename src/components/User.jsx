import { styled } from "styled-components";
import { useUserContext } from "../contexts/UserContext";
const User = ({ userId, image, name, username, website }) => {
  const { followUser, following, unFollowUser } = useUserContext();
  let tempArray = following.flat().map(({ username }) => {
    return username;
  });

  tempArray = new Set(tempArray);
  tempArray = [...tempArray];

  const isFollowing = tempArray.includes(username);
  return (
    <Wrapper>
      <div className="content">
        <img className="profile-image" src={image} alt={name} />
        <div className="info">
          <h5 className="title">{name}</h5>
          <p className="desc">
            @{username} / {website}
          </p>
          <div className="btn-container">
            {isFollowing ? (
              <button
                className="follow-btn"
                onClick={() => unFollowUser(username)}
              >
                unfollow
              </button>
            ) : (
              <button className="follow-btn" onClick={() => followUser(userId)}>
                follow
              </button>
            )}
          </div>
        </div>
      </div>
      <hr />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 90vw;
  max-width: 600px;
  margin: 0 auto;
  .content {
    margin-bottom: 1rem;
    gap: 1rem;
    display: flex;
    align-items: center;
  }
  .profile-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .title,
  .desc {
    margin: 0;
  }
  .follow-btn {
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
`;
export default User;
