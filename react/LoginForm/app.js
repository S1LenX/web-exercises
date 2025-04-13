import React from "react";

const LoginForm = () => {
  return (
    <div style={{ width: "300px", margin: "20px auto", textAlign: "left" }}>
      <h2 style={{ textAlign: "center" }}>Novell Services Login</h2>
      <form>
        <label>Username:</label>
        <input type="text" name="username" /> <br />

        <label>Password:</label>
        <input type="password" name="password" /> <br />

        <label>City of Employment:</label>
        <input type="text" name="city" /> <br />

        <label>Web Server:</label>
        <select>
          <option>Choose a server</option>
          <option>Server 1</option>
          <option>Server 2</option>
        </select>
        <br />

        <label>Please specify your role:</label> <br />
        <input type="radio" name="role" value="Admin" /> Admin <br />
        <input type="radio" name="role" value="Engineer" /> Engineer <br />
        <input type="radio" name="role" value="Manager" /> Manager <br />
        <input type="radio" name="role" value="Guest" /> Guest <br />

        <label>Single Sign-on to the following:</label> <br />
        <input type="checkbox" name="mail" /> Mail <br />
        <input type="checkbox" name="payroll" /> Payroll <br />
        <input type="checkbox" name="self-service" /> Self-service <br />

        <button type="submit">Login</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
};

export default LoginForm;
