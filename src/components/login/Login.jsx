import "./login.css";
import Carelon from "../../images/Carelon.png";
import { useRef } from "react";
import { useState } from "react";
import axios from "axios"
import requestUrl from '../../utils/requestMethods'
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  //this is to get the values of the username and password
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [disabled, setDisabled] = useState(true);

  const handleLogin = async e => {
      e.preventDefault();
      const username = usernameRef.current.value
      const password = passwordRef.current.value
      // console.log('username', username)
      // console.log('password', password)
      const credentials = {
        username: username,
        password: password,
      }
      try {
        // console.log(credentials);
        const res = await requestUrl.post("/auth/login", credentials)
        console.log(res.data)
        //check role
        if(res.data.role === 'associate') {
          navigate('/assochome')
        }
        else if (res.data.role === 'admin') {
          navigate('/adminhome')
        }

      } catch (error) {
        console.log(error?.response?.data.error)
      }
      
  }

  return (
    <header className="App-header">
      <div className="mb-5">
        <img src={Carelon} className="App-logo" alt="logo" />
      </div>
      <div className="LoginContainer">
        <div className="mb-1">
          <label for="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            ref={usernameRef}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            maxLength="7"
          />
        </div>
        <div className="mb-5">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            ref={passwordRef}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={handleLogin} type="login" className="btn btn-primary">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Login;
