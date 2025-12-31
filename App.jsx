import { useState } from "react";
import ProductList from "./components/ProductList";

export default function App() {
  const [showProducts, setShowProducts] = useState(true);
  const [name, setName] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <h1>React Product Dashboard</h1>

      <button onClick={() => setShowProducts(!showProducts)}>
        {showProducts ? "Hide Products" : "Show Products"}
      </button>

      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
      </div>

      <p>Hello, {name}</p>

      {showProducts && <ProductList />}
    </div>
  );
}

