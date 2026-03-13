import { Navigate, Route, Routes } from "react-router";
import MarketLayout from "./Layout/MarketLayout";

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

      <Route path="/login" />
      <Route path="/register" />

      <Route path="/logout" />
      <Route path="/cart" />

      <Route path="*" element={<Navigate to="/products" replace />} />
    </Routes>
  );
}

export default App;
