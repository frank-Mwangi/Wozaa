import { styled } from "styled-components";
import { NavLinks } from "../components";
import { useFeedContext } from "../contexts/FeedContext";
import { useUserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isSidebarOpen, resetCount } = useFeedContext();
  const { logout, user_profile } = useUserContext();
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="sidebar-body">
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
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.aside`
  .sidebar-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: var(--gray-50);
    padding: 1rem 0;
    z-index: 10;
    transform: translateX(-100%);
    transition: var(--transition);
  }
  .show-sidebar {
    transform: translateX(0%);
  }
  .sidebar-header {
    display: flex;
    justify-content: center;
  }
  .feed-btn {
    margin: 0;
    letter-spacing: var(--letter-spacing-2);
    text-transform: capitalize;
    color: var(--gray-600);
    transition: var(--transition);
    padding: 0 1rem;
    &:hover {
      color: var(--primary-700);
      padding-left: 1.5rem;
    }
  }
  .link {
    display: block;
    letter-spacing: var(--letter-spacing-2);
    text-transform: capitalize;
    color: var(--gray-600);
    transition: var(--transition);
    padding: 0.25rem 1rem;
    &:hover {
      color: var(--primary-700);

      padding-left: 1.5rem;
    }
  }
  .btn-container {
    text-align: center;
  }
  @media (min-width: 992px) {
    .sidebar-container {
      display: none;
    }
  }
`;
export default Sidebar;
