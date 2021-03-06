import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": "ad18867e-3abb-47ce-a980-db70f348d39e",
      "User-Name": username,
      "User-Secret": password
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
    } catch (error) {
      setError("Oops, Incorrect Credentials.");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>{" "}
            <br />
            <label>
              Test Credentials 1: <br />
              Username = anand123 Password = ap321
            </label>
            <br />
            <label>
              Test Credentials 2: <br />
              Username = deepapatil Password = dp321
            </label>
            <br />
            <label>
              Test Credentials 3: <br />
              Username = test123 Password = test123
            </label>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
