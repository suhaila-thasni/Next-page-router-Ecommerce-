

import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import img from "next/image"; 
import 'bootstrap/dist/css/bootstrap.min.css';





export default function Home() {
  return (
   
    
    <div>







  
    <div style={{ marginTop: "100px", backgroundColor: "white" }}>

      <div  style={{ marginTop: "150px" }} id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/Images/b1.webp" className="d-block w-100" alt="banner1" />
          </div>
          <div className="carousel-item">
            <img src="/Images/b2.webp" className="d-block w-100" alt="banner2" />
          </div>
          <div className="carousel-item">
            <img src="/Images/b3.webp" className="d-block w-100" alt="banner3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      
      <div className="container mt-5">
        <h2 className="mb-4">Special Offers</h2>
        <div className="row">

          <div className="col-md-3">
            <div className="card shadow-sm">
              <img
                  src="Images/OFFER3jpg.jpg"

                className="card-img-top"
                alt="mobile"
                height={200}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Mobiles Sale</h5>
                <p className="card-text">Up to 40% OFF</p>
                <Link href="/productlist" className="btn btn-primary">Shop Now</Link>
              </div>
            </div>
          </div>





          <div className="col-md-3">
            <div className="card shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=500&q=60"
                className="card-img-top"
                alt="fashion"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Fashion Deals</h5>
                <p className="card-text">Min 50% OFF</p>
                <Link href="/productlist" className="btn btn-primary">Shop Now</Link>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow-sm">
              <img
                  src="Images/OFFER1.webp"
              className="card-img-top"
                alt="electronics"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Electronics</h5>
                <p className="card-text">Save Big Today</p>
                <Link href="/productlist" className="btn btn-primary">Shop Now</Link>
              </div>
            </div>
          </div>







          <div className="col-md-3">
            <div className="card shadow-sm">
              <img
                src="Images/OFFER2.webp"

                className="card-img-top"
                alt="home"
                height={200}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Home Appliances</h5>
                <p className="card-text">Starting ₹999</p>
                <Link href="/productlist" className="btn btn-primary">Shop Now</Link>
              </div>
            </div>
          </div> 






            </div>
      </div>
    </div>
  










   
    </div>
  );
}
