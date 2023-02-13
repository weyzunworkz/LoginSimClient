

import logo from "./logo.svg";
import "./App.css";
import Mainpage from "./Mainpage";
import "bootstrap/dist/css/bootstrap.min.css";
import Carelon from "./Carelon.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="mb-5">
        <img
          src={Carelon}
          className="App-logo"
          alt="logo"
        />
        </div>
          <div className="LoginContainer">
          <div className="mb-1">
            <label
              for="exampleInputEmail1"
              className="form-label"
            >
              Username
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
            />
          </div>
          <div className="mb-5">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              type="login"
              className="btn btn-primary"
              >
              Login
            </button>
          </div>
        </div>
        </header>
    </div>
  );
}

export default App;
