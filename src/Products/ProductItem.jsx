import { Typography } from "@mui/material";
import { Link } from "react-router";

export default function ProductItem({ product }) {
  return (
    <li key={product.id} className="product">
      <Link to={"/products/" + product.id}>
        <Typography>{product.title}</Typography>
        <Typography>{product.description}</Typography>
        <Typography>${product.price / 100}</Typography>
      </Link>
    </li>
  );
}
