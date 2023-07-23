import { styled } from "styled-components";
import { Link } from "react-router-dom";

const PayWall = () => {
  return (
    <Wrapper className="full-page">
      <p className="paywall-card">
        <p className="title paywall-desc">
          You have exceeded your daily limit <br />
          upgrade to premium to view more posts
        </p>
        <Link to="/payment" className="btn btn-secondary">
          upgrade to premium
        </Link>
      </p>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  display: grid;
  justify-content: center;
  align-items: start;
  .paywall-card {
    text-align: center;
    padding: 1rem 2rem;
    background: var(--gray-50);
    width: 90vw;
    max-width: 600px;
    box-shadow: var(--shadow-1);
    border-radius: var(--border-radius-3);
  }
  .btn {
    margin-top: 2rem;
  }
`;
export default PayWall;
