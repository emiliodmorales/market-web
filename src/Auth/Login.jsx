import { Button, FormLabel, Typography } from "@mui/material";
import { LogIn, ShoppingBag, UserPlus } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "./AuthContext";
import { useState } from "react";

export default function Login() {
  const [error, setError] = useState();
  const { login } = useAuth();
  const navigate = useNavigate();

  const formLogin = async (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      await login({ username, password });
      navigate("/products");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="login">
      <ShoppingBag />
      <Typography variant="h3">Create account</Typography>
      <Typography variant="subtitle1">
        Join Market and start shopping
      </Typography>
      <form action={formLogin}>
        <FormLabel>
          Username
          <input type="text" name="username" placeholder="Choose a username" />
        </FormLabel>

        <FormLabel>
          Password
          <input
            type="password"
            name="password"
            placeholder="Create a password"
          />
        </FormLabel>

        <Button type="submit">
          <LogIn />
          Login
        </Button>
      </form>
      {error && <Typography>{error}</Typography>}
      <Typography>
        Don't have an account? <Link to="/register">Register</Link>
      </Typography>
    </div>
  );
}
