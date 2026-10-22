
import { useState } from "react";
import LoginForm from "./components/LoginForm.tsx";
import RegisterForm from "./components/RegisterForm.tsx";
import "./App.css";

const App = () => {
  const [page, setPage] = useState<"login" | "register">("login");

  return (
    <main className="app-container">
      {page === "login" ? (
        <LoginForm onSwitch={() => setPage("register")} />
      ) : (
        <RegisterForm onSwitch={() => setPage("login")} />
      )}
    </main>
  );
};

export default App;
