import React from 'react';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div className="container">
      <h2>Sign In</h2>
      <form>
        <input type="text" placeholder="Username" /><br />
        <input type="password" placeholder="Password" /><br />
        <button type="submit">Sign In</button>
      </form>
      <p><Link to="/register">Don't have an account? Register here</Link></p>
    </div>
  );
}

export default SignIn;
