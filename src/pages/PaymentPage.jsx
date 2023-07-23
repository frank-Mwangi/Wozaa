import styled from "styled-components";
import { useUserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";
const PaymentPage = () => {
  const { validatePayment } = useUserContext();

  return (
    <Wrapper className="full-page">
      <div className="center-container">
        <div className="pay-btn-container">
          <Link to="/" onClick={validatePayment} className="btn btn-secondary">
            pay
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 10rem;
  .pay-btn-container {
    text-align: center;
  }
`;
export default PaymentPage;
