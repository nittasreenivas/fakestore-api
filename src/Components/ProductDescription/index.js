import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDescription() {
  const [product, setProduct] = useState({});
  const params = useParams();
  console.log("params:", params);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((result) => {
        setProduct(result);
        console.log(result);
      });
  }, [params]);
  return (
    <div className="product-desc">
      <h2> Product Description </h2>
      <h3> {product.title} </h3>
      <img alt="product" src={product.image} width={200} />
      <p> {product.description} </p>
      <button>${product.price} </button>
    </div>
  );
}
