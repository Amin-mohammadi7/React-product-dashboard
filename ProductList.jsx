import Product from "./Product";

export default function ProductList() {
  const products = [
    { id: 1, title: "Laptop", price: 1200 },
    { id: 2, title: "Phone", price: 800 },
    { id: 3, title: "Tablet", price: 600 },
  ];

  return (
    <div>
      {products.map((p) => (
        <Product key={p.id} title={p.title} price={p.price} />
      ))}
    </div>
  );
}
