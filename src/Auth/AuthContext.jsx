import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router";

const API = import.meta.env.VITE_API_BASE + "/users";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = window.sessionStorage.getItem("token");
    if (data) {
      setToken(data);
    }
  }, []);

  const register = useCallback(async (credentials) => {
    const response = await fetch(API + "/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const result = await response.json();
    if (!response.ok) {
      throw Error(result.error);
    }
    setToken(result.token);
    window.sessionStorage.setItem("token", result.token);
  }, []);

  const login = useCallback(async (credentials) => {
    const response = await fetch(API + "/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const result = await response.json();
    if (!response.ok) {
      throw Error(result.error);
    }
    setToken(result.token);
    window.sessionStorage.setItem("token", result.token);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    window.sessionStorage.removeItem("token");
    navigate("/products");
  }, []);

  const value = { token, register, login, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw Error("useAuth must be used within an AuthProvider");
  return context;
}
