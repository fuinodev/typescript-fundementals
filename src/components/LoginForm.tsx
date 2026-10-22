
import { useState, type FormEvent } from "react";

type LoginFormProps = {
  onSwitch: () => void;
};

const LoginForm = ({ onSwitch }: LoginFormProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim() || !password) {
      alert("Please complete all fields.");
      return;
    }

    alert("Login form submitted (demo only).");
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h1>Login</h1>

      <label htmlFor="login-email">Email</label>
      <input
        id="login-email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <label htmlFor="login-password">Password</label>
      <input
        id="login-password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />

      <button type="submit">Login</button>

      <p>
        Don't have an account?{" "}
        <button type="button" onClick={onSwitch}>
          Register
        </button>
      </p>
    </form>
  );
};

export default LoginForm;
