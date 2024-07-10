import "./login.scss";

export default function Login() {
  return (
    <div className="login">
      <h1 className="title">Sign in</h1>
      <div className="loginForm">
        <form>
          <label>Username</label>
          <input/>

          <label>Password</label>
          <input/>

          <div className="submitButton">
            <button>Sign in</button>
          </div>

        </form>
      </div>
      <div className="bottomText">
        Not a member? <a href="#">Sign up now</a>
      </div>
    </div>
  );
}
