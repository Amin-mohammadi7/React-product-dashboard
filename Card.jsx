export default function Card({ children }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
      {children}
    </div>
  );
}
