import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

interface AuthFormProps {
  onAuth: boolean;
}

function AuthForm({ onAuth }: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState<string | null>(null);
  // const navigate = useNavigate();

  const validateInput = (): string[] => {
    const errors: string[] = [];
    if (!email) errors.push("Email is required");
    if (!password) errors.push("Password is required");
    if (onAuth && !displayName)
      errors.push("Display Name is required for sign up");
    return errors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = validateInput();
    if (errors.length > 0) {
      setError(errors.join(", "));
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="email-address"
        name="email"
        type="email"
        placeholder="Email address"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {onAuth && (
        <>
          <input
            id="confirm-password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            id="display-name"
            name="displayName"
            type="text"
            placeholder="Display Name"
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />
        </>
      )}
      {error && <p className="error">{error}</p>}
      <button type="submit">{onAuth ? "Sign Up" : "Log In"}</button>
    </form>
  );
}

export default AuthForm;
