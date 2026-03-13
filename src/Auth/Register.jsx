import { Button, FormLabel, Typography } from "@mui/material";
import { ShoppingBag, UserPlus } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "./AuthContext";
import { useState } from "react";

export default function Register() {
  const [error, setError] = useState();
  const { register } = useAuth();
  const navigate = useNavigate();

  const formRegister = async (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      await register({ username, password });
      navigate("/products");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="register">
      <ShoppingBag />
      <Typography variant="h3">Create account</Typography>
      <Typography variant="subtitle1">
        Join Market and start shopping
      </Typography>
      <form action={formRegister}>
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
          <UserPlus />
          Create Account
        </Button>
      </form>
      {error && <Typography>{error}</Typography>}
      <Typography>
        Already have an account? <Link to="/login">Login</Link>
      </Typography>
    </div>
  );
}
