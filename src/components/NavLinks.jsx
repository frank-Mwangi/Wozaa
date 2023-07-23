import { Link } from "react-router-dom";
import { useFeedContext } from "../contexts/FeedContext";
const NavLinks = () => {
  const { closeSidebar } = useFeedContext();
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
      <li>
        <Link onClick={closeSidebar} className="link" to="payment">
          upgrade
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
