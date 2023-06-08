import styled from 'styled-components';


const SignInStyle = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;

.sign-in-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 40px;
  font-family: 'Roboto', sans-serif;

  img {
    width: 65px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 2em;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    margin-bottom: 20px;
  }

  button.fb-btn {
    display: block;
    width: 100%;
    margin-top: 30px;
    padding: 10px;
    background-color: #4285f4;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;

    span {
      font-size: 1.5em;
    }

    &:hover {
      background-color: #1967d2;
    }
  }

  p.separator {
    font-size: 16px;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    label {
      font-size: 14px;
      margin-bottom: 5px;
      margin-top: 5px;
      text-align: left;
    }

    input {
      width: 100%;
      padding: 10px;
      border: 1px solid #000;
      border-radius: 4px;
      font-size: 16px;
      box-sizing: border-box;
      margin-bottom: 10px;
    }

    .password-field {
      display: flex;
      flex-direction: row;
      a {
          margin-left: 200px;
      }
    }

    a {
      font-size: 14px;
      margin-bottom: 20px;
      text-align: right;
      color: gray;
      display: inline-block;
    }

    .signin-btn {
      display: block;
      margin-top: 50px;
      width: 100%;
      padding: 10px;
      background-color: #000;
      color: #fff;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
    }
  }

  div.register-box {
    border: 1px solid gray;
    padding: 30px 70px;
    font-size: 12px;
    margin-top: 50px;
    width: 320px;
    a {
      color: gray;
      margin-left: 5px;
    }
  }
}
`

export default SignInStyle;