import React from "react";
import { styled } from "styled-components";

const Error = () => {
  return (
    <Wrapper>
      <div className="center-container">
        <h5 className="desc">
          something went wrong, please try again later...{" "}
        </h5>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .center-container {
    margin: 10rem auto;
    text-align: center;
  }
  .desc {
    text-transform: capitalize;
  }
`;
export default Error;
