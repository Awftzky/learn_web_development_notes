import { useParams } from "react-router";

const ProductDetailPage = () => {
// OBJEK WAJIB SAMA DIDALAM DYNAMIC ROUTE
  const params = useParams<{ productSlug: string }>();

  return (
    <div>
      <h1>this Is Detail product</h1>
      <p>We are now in {params.productSlug}</p>
    </div>
  );
};

export default ProductDetailPage;
