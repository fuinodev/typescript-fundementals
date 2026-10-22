
import { useState, type FormEvent } from "react";

type RegisterFormProps = {
  onSwitch: () => void;
};

type RegisterData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterForm = ({ onSwitch }: RegisterFormProps) => {
  const [form, setForm] = useState<RegisterData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (form.password.length < 8) {
      alert("Password must contain at least 8 characters.");
      return;
    }

    alert("Registration form submitted (demo only).");
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h1>Register</h1>

      <label htmlFor="register-username">Username</label>
      <input
        id="register-username"
        type="text"
        value={form.username}
        onChange={(event) =>
          setForm({ ...form, username: event.target.value })
        }
        required
      />

      <label htmlFor="register-email">Email</label>
      <input
        id="register-email"
        type="email"
        value={form.email}
        onChange={(event) =>
          setForm({ ...form, email: event.target.value })
        }
        required
      />

      <label htmlFor="register-password">Password</label>
      <input
        id="register-password"
        type="password"
        value={form.password}
        onChange={(event) =>
          setForm({ ...form, password: event.target.value })
        }
        required
      />

      <label htmlFor="register-confirm">Confirm Password</label>
      <input
        id="register-confirm"
        type="password"
        value={form.confirmPassword}
        onChange={(event) =>
          setForm({ ...form, confirmPassword: event.target.value })
        }
        required
      />

      <button type="submit">Create Account</button>

      <p>
        Already have an account?{" "}
        <button type="button" onClick={onSwitch}>
          Login
        </button>
      </p>
    </form>
  );
};

export default RegisterForm;
