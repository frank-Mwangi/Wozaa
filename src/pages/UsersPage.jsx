import { useUserContext } from "../contexts/UserContext";
import { User } from "../components";
import { styled } from "styled-components";

const UsersPage = () => {
  const { other_users: users } = useUserContext();
  return (
    <Wrapper className="full-page">
      <div className="center-container">
        {users.map((user) => {
          return <User key={user.userId} {...user} />;
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  .center-container {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    gap: 2rem 1rem;
    padding: 2rem;
  }
`;
export default UsersPage;
