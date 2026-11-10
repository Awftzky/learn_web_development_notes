const products = [
  { id: 1, name: "Keyboard" },
  { id: 2, name: "Mouse" },
  { id: 3, name: "Monitor" },
];

const ProductListPage = () => {
  return (
    <main>
      <h1>Daftar Produk</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </main>
  );
};

export default ProductListPage;
