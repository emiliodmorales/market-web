const API = import.meta.env.VITE_API_BASE + "/products";

export async function getProducts() {
  const response = await fetch(API);
  const result = await response.json();
  return result;
}

export async function getProduct(id) {
  const response = await fetch(API + "/" + id);
  const result = await response.json();
  return result;
}
