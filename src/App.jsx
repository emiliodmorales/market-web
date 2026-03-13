import { Navigate, Route, Routes } from "react-router";
import Register from "./Auth/Register";
import Login from "./Auth/Login";

function App() {
  return (
    <Routes>
      <Route path="/products">
        <Route index />
        <Route path=":id" />
      </Route>

      <Route path="/orders">
        <Route index />
        <Route path=":id" />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/cart" />

      <Route path="*" element={<Navigate to="/products" replace />} />
    </Routes>
  );
}

export default App;
