import { SlSocialSteam } from "react-icons/sl";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import { useFeedContext } from "../contexts/FeedContext";
import { NavLinks } from "../components";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const { user_profile, logout } = useUserContext();
  const { openSidebar, closeSidebar, isSidebarOpen, resetCount } =
    useFeedContext();

  return (
    <Wrapper>
      <div className="center-container">
        <div className="nav-header">
          <Link to="/">
            <div className="logo">
              <SlSocialSteam className="logo-icon" />
            </div>
          </Link>
        </div>
        {isSidebarOpen ? (
          <button className="toggle-btn">
            <RxCross1 onClick={closeSidebar} />
          </button>
        ) : (
          <button className="toggle-btn">
            <AiOutlineMenu onClick={openSidebar} />
          </button>
        )}
        {user_profile && <NavLinks />}
        <div className="btn-container">
          {user_profile ? (
            <button
              onClick={() => {
                logout(resetCount);
              }}
              className="btn btn-secondary"
            >
              logout
            </button>
          ) : (
            <Link to="/login" className="btn btn-secondary">
              login
            </Link>
          )}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  .center-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }

  .logo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid var(--primary-700);
    display: grid;
    place-items: center;
  }
  .logo-icon {
    font-size: 2rem;
    color: var(--primary-700);
  }
  .nav-links {
    display: none;
    gap: 1rem;
  }
  .link {
    letter-spacing: var(--letter-spacing-2);
    text-transform: capitalize;
    color: var(--gray-600);
    transition: var(--transition);
    &:hover {
      color: var(--primary-700);
      border-bottom: 1px solid var(--primary-700);
    }
  }
  .btn {
    padding: 0.25rem 0.75rem;
    border-radius: var(--border-radius-1);
  }
  .btn-container {
    display: none;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    color: var(--primary-700);
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      transform: rotate(90deg);
      color: var(--primary-600);
    }
  }
  @media (min-width: 992px) {
    .nav-links {
      display: flex;
    }

    .btn-container {
      display: block;
    }
    .toggle-btn {
      display: none;
    }
  }
`;
export default Navbar;
