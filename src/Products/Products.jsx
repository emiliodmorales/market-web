import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import ProductItem from "./ProductItem";
import { Search } from "lucide-react";

export default function Products() {
  const [products, setProducts] = useState();

  useEffect(() => {
    const tryGetProducts = async () => {
      const retrievedProducts = await getProducts();
      setProducts(retrievedProducts);
    };
    tryGetProducts();
  }, []);

  if (!products) return <p>Loading products...</p>;

  console.log(products);

  return (
    <div className="products">
      <Typography>Discover Products</Typography>
      <Typography>Browse our curated collection of premium products</Typography>
      <search>
        <Search />
        <input type="search" placeholder="Search products..." />
      </search>
      <ul>
        {products.map((item) => (
          <ProductItem product={item} />
        ))}
      </ul>
    </div>
  );
}
