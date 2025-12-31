


import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { CartContext } from "../../context/CartContext";

interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;

  const productId = Array.isArray(id) ? id[0] : id;

  const [product, setProduct] = useState<ProductType | null>(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    if (!router.isReady || !productId) return;

    const loadProductById = async () => {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
      }
    };

    loadProductById();
  }, [router.isReady, productId]);

  if (!product) {
    return <h3 style={{ marginTop: "150px" }}>Loading product...</h3>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    router.push("/cart");
  };

  return (
    <div style={{ marginTop: "100px", backgroundColor: "white" }} className="container my-5">
      <div className="card p-4 shadow-sm">
        <div className="row g-4 align-items-center">
          <div className="col-md-5 text-center">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid"
              style={{ maxHeight: "350px", objectFit: "contain" }}
            />
          </div>

          <div className="col-md-7 d-flex flex-column">
            <h2>{product.title}</h2>

            <h4>
              <strong>Price:</strong> ${product.price}
            </h4>

            <h5>
              <strong>Rating:</strong> {product.rating?.rate} ⭐ ({product.rating?.count})
            </h5>

            <p><strong>Category:</strong> {product.category}</p>
            <p>{product.description}</p>

            <button onClick={handleAddToCart} className="btn btn-primary mt-auto w-50">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
