import { styled } from "styled-components";
import { useUserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";
const MyProfile = () => {
  const {
    user_profile: {
      auth_user_name: name,
      username,
      website,
      company_name: company,
      phone,
    },
  } = useUserContext();

  return (
    <Wrapper className="full-page">
      <article className="user-profile">
        <div className="header">
          <h5 className="title">{name}</h5>
          <span className="desc">@{username}</span>
        </div>
        <hr />
        <div className="content">
          <p className="content-text desc">
            <span>Website : </span>
            {website}
          </p>
          <p className="content-text desc">
            <span>Company : </span>
            {company}
          </p>
          <p className="content-text desc">
            <span>Phone : </span>
            {phone}
          </p>
        </div>
        <div className="btn-container">
          <Link to="/" className="btn btn-secondary">
            back to feed
          </Link>
        </div>
      </article>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  .header {
    text-align: center;
  }
  .user-profile {
    background: var(--gray-50);
    width: 90vw;
    max-width: 500px;
    margin: 3rem auto;
    padding: 1rem;
    border-radius: var(--border-radius-3);
    box-shadow: var(--shadow-2);
  }
  .content-text {
    span {
      color: var(--primary-700);
    }
  }
  .btn-container {
    margin-top: 2rem;
    text-align: center;
  }
  .btn {
    padding: 0.25rem 0.75rem;
  }
`;
export default MyProfile;
