

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

interface ProductType {
  id: number;
  title: string;
  price: number;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

export default function ProductList() {
  const [Product, setProduct] = useState<ProductType[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log("Error fetching products:", error));
  }, []);

  return (
    <div className="container my-5">
      <h2 style={{ marginTop: "180px" }} className="text-center mb-4">
        Product List
      </h2>

      <div className="row">
        {Product.map((p) => (
          <div key={p.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card p-3 shadow-sm h-100">
              <img
                src={p.image}
                alt={p.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "contain" }}
              />

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text mb-1">
                  <strong>Price:</strong> ${p.price}
                </p>
                <p className="card-text mb-3">
                  <strong>Rating:</strong> {p.rating?.rate} ⭐ ({p.rating?.count})
                </p>

                <Link
                  href={`/productdetails/${p.id}`}
                  className="btn btn-primary mt-auto w-100"
                >
                  View Details
                </Link>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

