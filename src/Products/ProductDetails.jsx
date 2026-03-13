import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { getProduct } from "../api/products";
import { ArrowLeft, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "../Cart/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const { addItem } = useCart();

  useEffect(() => {
    const tryGetProduct = async () => {
      const retrievedProduct = await getProduct(id);
      setProduct(retrievedProduct);
    };
    tryGetProduct();
  }, []);

  const [quantity, setQuantity] = useState(1);

  if (!product) return <p>Loading product...</p>;

  return (
    <div className="product-details">
      <Link to="/products">
        <Button>
          <ArrowLeft />
          Back to Products
        </Button>
      </Link>
      <Typography>{product.title}</Typography>
      <Typography>{product.description}</Typography>
      <Typography>${product.price / 100}</Typography>
      <div>
        <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
          <Minus />
        </button>
        <input
          type="number"
          value={quantity}
          min={1}
          onChange={(e) => setQuantity(+e.target.value)}
        />
        <button onClick={() => setQuantity(quantity + 1)}>
          <Plus />
        </button>
      </div>
      <Button onClick={() => addItem(product, quantity)}>
        <ShoppingBag />
        Add to Cart
      </Button>
    </div>
  );
}
