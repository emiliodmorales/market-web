import { useState } from "react";
import { useAuth } from "../Auth/AuthContext";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router";

export default function Cart() {
  const { items, removeItem, updateQuantity, clearCart, totalPrice } =
    useCart();
  const { token } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  if (!token) {
    return <p>You need to be logged in to view your cart</p>;
  }

  if (items.length === 0) {
    return <p>Your cart is empty</p>;
  }

  const handleCheckout = async () => {
    setIsSubmitting(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    clearCart();
    toast.success("Order placed successfully!");
    navigate(`/Orders/1`);
    setIsSubmitting(false);
  };

  return <p>cart</p>;
}
