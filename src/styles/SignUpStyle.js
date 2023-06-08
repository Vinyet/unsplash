import styled from 'styled-components';


const SignUpStyle = styled.div`
.main-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'Roboto', sans-serif;
  .sidebar {
    width: 40%;
    background-image: url('https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80');
    background-size: cover;
    background-position: center;
    background-color: lightblue;
    height: 100vh;
    top: 0;
    left: 0;
    bottom: 0;
    position: fixed;
    img {
      padding: 70px;
      width: 30px;
      height: 30px;
    }
    h3 {
      color: #fff;
      font-size: 3em;
      margin: 230px 80px;
    }
    h5 {
      color: #fff;
      font-size: 1.5em;
      font-weight: 400;
      margin-top: -220px;
      margin-left: 80px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
    p {
      color: #fff;
      margin-top: 260px;
      margin-left: 80px;
    }
  }
  .form-container {
    width: 60%;
    padding: 70px;
    box-sizing: border-box;
    height: 100vh;
    top: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    h2 {
      margin-top: 50px;
      margin-bottom: 10px;
      text-align: center;
      font-size: 2.9em;
    }
    p {
      font-size: 14px;
      display: inline-block;
      text-align: center;
      margin-bottom: 10px;
      margin-left: 360px;
    }
    .o {
      margin-left: 480px;
    }
    a {
      display: inline-block;
      color: gray;
      margin-left: 10px;
      text-align: center;
      text-decoration: underline;
    }
    .fb-btn {
      display: block;
      margin-top: 50px;
      margin-left: 200px;
      width: 60%;
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
    form
    .form-names {
      display: flex;
      flex-direction: row;
      label {
        display: block;
        margin-bottom: 5px;
        font-size: 16px;
      }
      input {
        width: 80%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
        box-sizing: border-box;
        margin-bottom: 10px;
      }
    }
    form label {
      display: block;
      margin-bottom: 5px;
      margin-left: 200px;
      font-size: 16px;
    }    
    form input {
      width: 60%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
      box-sizing: border-box;
      margin-bottom: 10px;
      margin-left: 200px;
    }
    .signup-btn {
      display: block;
      margin-top: 50px;
      margin-left: 200px;
      width: 60%;
      padding: 10px;
      background-color: #000;
      color: #fff;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
    }
}
  
`

export default SignUpStyle;

