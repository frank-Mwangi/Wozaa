import { Link } from "react-router-dom";
import { useFeedContext } from "../contexts/FeedContext";
import { useUserContext } from "../contexts/UserContext";
const NavLinks = () => {
  const { closeSidebar } = useFeedContext();
  const { isPremiumUser } = useUserContext();
  return (
    <ul className="nav-links">
      <li>
        <Link onClick={closeSidebar} className="link" to="/">
          feed
        </Link>
      </li>
      <li>
        <Link onClick={closeSidebar} className="link" to="/my-profile">
          my profile
        </Link>
      </li>
      <li>
        <Link onClick={closeSidebar} className="link" to="my-posts">
          my posts
        </Link>
      </li>
      <li>
        <Link onClick={closeSidebar} className="link" to="following">
          following
        </Link>
      </li>
      <li>
        <Link onClick={closeSidebar} className="link" to="users">
          users
        </Link>
      </li>

      {!isPremiumUser && (
        <li>
          <Link onClick={closeSidebar} className="link" to="payment">
            upgrade
          </Link>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
