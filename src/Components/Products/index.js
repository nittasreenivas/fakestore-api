import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
        console.log(result);
      });
  }, []);
  return (
    <div>
      <h3> Products Page </h3>
      <div className="products-container">
        {products.map((item) => {
          return (
            <div key={item.id} className="each-product">
              <Link to={`/products/${item.id}`} state={item}>
                <p> {item.title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
