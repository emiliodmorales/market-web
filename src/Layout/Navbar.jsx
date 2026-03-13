import { Button } from "@mui/material";
import {
  ClipboardList,
  LogIn,
  LogOut,
  Package,
  ShoppingBag,
  ShoppingCart,
  UserPlus,
} from "lucide-react";
import { Link, NavLink } from "react-router";
import { useAuth } from "../Auth/AuthContext";

export default function Navbar() {
  const { token } = useAuth();

  return (
    <header>
      <div>
        <Link to="/products">
          <Button>
            <ShoppingBag />
            Market
          </Button>
        </Link>
      </div>

      <nav>
        <NavLink to="/products">
          <Button variant="contained">
            <Package />
            Products
          </Button>
        </NavLink>

        {token && (
          <NavLink to="/orders">
            <Button variant="contained">
              <ClipboardList />
              Orders
            </Button>
          </NavLink>
        )}
      </nav>

      {token ? (
        <div className="user-actions">
          <Link to="/logout">
            <Button variant="outlined">
              <LogOut />
              Logout
            </Button>
          </Link>
          <Link to="/cart">
            <Button variant="contained">
              <ShoppingCart />
              Cart
            </Button>
          </Link>
        </div>
      ) : (
        <div className="user-actions">
          <Link to="/login">
            <Button variant="outlined">
              <LogIn />
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="contained">
              <UserPlus />
              Register
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
