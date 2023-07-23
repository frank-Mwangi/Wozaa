import { styled } from "styled-components";
import { SlSocialSteam } from "react-icons/sl";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useUserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const { login, user_profile } = useUserContext();
  const navigate = useNavigate();
  const [userLoginData, setUserLoginData] = useState({
    name: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserLoginData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, password } = userLoginData;
    if (!name || !password) {
      toast.error("Please fill all the inputs");
    }
    login(userLoginData);
  };
  useEffect(() => {
    if (user_profile) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [user_profile]);
  return (
    <Wrapper className="full-page">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-header">
          <div className="logo">
            <SlSocialSteam className="logo-icon" />
          </div>
          <h4 className="title">login</h4>
        </div>
        <div className="form-row">
          <label className="label desc" htmlFor="name">
            name
          </label>
          <input
            className="form-input"
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label className="label desc" htmlFor="password">
            password
          </label>
          <input
            className="form-input"
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-block">login</button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.1);

  .form {
    width: 90vw;
    max-width: 600px;
    background: var(--gray-50);
    padding: 2rem;
    border-radius: var(--border-radius-3);
    box-shadow: var(--shadow-1);
  }
  .form-header {
    text-align: center;
    margin: 0 auto;
    padding: 0.5rem 1rem;
    margin-bottom: 2rem;
  }
  .logo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid var(--primary-700);
    display: grid;
    place-items: center;
    margin: 0 auto 0.5rem;
  }
  .logo-icon {
    font-size: 2rem;
    color: var(--primary-700);
  }
  .title {
    color: var(--primary-700);
    text-transform: capitalize;
  }
  .form-row {
    margin-bottom: 0.5rem;
  }
  .label {
    color: var(--primary-800);
    text-transform: capitalize;
  }
  .form-input {
    width: 100%;
    padding: 0.5rem 1rem;
    border: 1px solid var(--primary-600);
    border-radius: var(--border-radius-1);
  }
  .btn {
    margin-top: 1rem;
  }
`;
export default RegisterPage;
