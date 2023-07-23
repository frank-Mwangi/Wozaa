import { styled } from "styled-components";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <Wrapper className="full-page">
      <div className="center-container">
        <h2 class="title">Error: 404</h2>
        <p className="desc">
          We can't seem to find the page you are looking for... :(
        </p>
        <Link to="/" className="btn btn-secondary">
          back to feed
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: grid;
  place-items: center;
  .center-container {
    text-align: center;
  }
`;
export default ErrorPage;
