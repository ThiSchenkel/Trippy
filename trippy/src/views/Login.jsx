import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div
        className="container"
        style={{ width: "300px", justifyContent: "center" }}
      >
        <h1 className="pt-5" style={{ fontSize: "50px", textAlign: "center" }}>
          Login
        </h1>

        <main>
          <form className="pt-5">
            <label for="inputEmail" class="visually-hidden">
              Email address
            </label>
            <input
              type="email"
              id="inputEmail"
              class="form-control"
              placeholder="Email address"
              required=""
              autofocus=""
            />
            <label for="inputPassword" class="visually-hidden">
              Password
            </label>
            <input
              type="password"
              id="inputPassword"
              class="form-control"
              placeholder="Password"
              required=""
            />
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">
              Login
            </button>
          </form>
        </main>
      </div>
    );
  }
}

export default Login;
