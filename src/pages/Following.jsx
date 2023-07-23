import { useUserContext } from "../contexts/UserContext";
import { Post } from "../components";
import { styled } from "styled-components";
const Following = () => {
  const { following } = useUserContext();
  let newFollowingArray = following.flat();
  if (newFollowingArray.length === 0) {
    return (
      <section className="not-following">
        <div className="center-container">
          <p style={{ textAlign: "center" }} className="desc">
            Oops, it looks like you're not currently following anyone :(
          </p>
        </div>
      </section>
    );
  }
  return (
    <Wrapper>
      <Post feed={newFollowingArray} />
    </Wrapper>
  );
};
const Wrapper = styled.main``;
export default Following;
