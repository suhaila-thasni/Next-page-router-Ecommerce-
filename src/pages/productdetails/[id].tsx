
"use client";

import React, { useState, useEffect, useContext } from "react";
import { useParams, useRouter } from "next/navigation";
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
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductType | null>(null);
  const { addToCart } = useContext(CartContext);
  const router = useRouter();

  const loadProductById = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (id) loadProductById();
  }, [id]);

  if (!product) {
    return <h3 style={{ marginTop: "80px" }}>Loading product...</h3>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    router.push("/cart");
  };

  return (
    <div style={{ marginTop: "80px", backgroundColor: "white" }} className="container my-8">
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
            <h2 className="card-title">{product.title}</h2>

            <h4 className="mb-2">
              <strong>Price:</strong> ${product.price}
            </h4>

            <h5 className="mb-3">
              <strong>Rating:</strong> {product.rating?.rate} ⭐ ({product.rating?.count})
            </h5>

            <div className="mb-3">
              <h6><strong>Category:</strong> {product.category}</h6>
              <p>{product.description}</p>
            </div>

            <button onClick={handleAddToCart} className="btn btn-primary mt-auto w-50">
              Add to Cart
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}


