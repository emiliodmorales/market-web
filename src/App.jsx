import { Navigate, Route, Routes } from "react-router";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import Products from "./Products/Products";
import ProductDetails from "./Products/ProductDetails";
import Cart from "./Cart/Cart";

function App() {
  return (
    <Routes>
      <Route path="/products">
        <Route index element={<Products />} />
        <Route path=":id" element={<ProductDetails />} />
      </Route>

      <Route path="/orders">
        <Route index />
        <Route path=":id" />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="*" element={<Navigate to="/products" replace />} />
    </Routes>
  );
}

export default App;
