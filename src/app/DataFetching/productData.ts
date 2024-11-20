export const fetchProduct = async () => {
  const response = await fetch("https://6732f3e02a1b1a4ae1117250.mockapi.io/Products")
  const product = await response.json();
  return product;
}