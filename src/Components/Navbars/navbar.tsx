

import React from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img
            src="/Images/flipslogo.svg"
            alt="logo"
            width="200px"
            height="85px"
            style={{ position: "relative", right: "70px" }}
          />
        </div>

        <div
          className={styles.icons}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
          <Link
            href="/"
            style={{
              color: "black",
              textDecoration: "none",
              fontSize: "large",
              marginRight: "20px",
              position: "relative",
              right: "30px"
            }}
          >
            Home
          </Link>

          <Link
            href="/productlist"
            style={{
              color: "black",
              textDecoration: "none",
              fontSize: "large",
              marginRight: "20px",
              position: "relative",
              right: "20px"
            }}
          >
            Productlist
          </Link>

          <Link
            href="/aboutus"
            style={{
              color: "black",
              textDecoration: "none",
              fontSize: "large",
              marginRight: "20px",
              position: "relative",
              right: "10px"
            }}
          >
            Aboutus
          </Link>

          <Link
            href="/contactus"
            style={{
              color: "black",
              textDecoration: "none",
              fontSize: "large",
              marginRight: "20px",
              position: "relative",
              right: "10px"
            }}
          >
            Contactus
          </Link>

          <input
            type="text"
            className={styles.searchbar}
            placeholder="SEARCH FOR PRODUCTS, BRANDS AND MORE"
            style={{ width: "400px", position: "relative", right: "90px" }}
          />

          <Image
            src="/Images/login.webp"
            alt="login"
            width={30}
            height={30}
            style={{ position: "relative", left: "30px" }}
          />
          <Link
            href="/"
            style={{
              color: "black",
              textDecoration: "none",
              fontSize: "large",
              marginRight: "20px",
              position: "relative",
              left: "25px"
            }}
          >
            Login
          </Link>

          <Image
            src="/Images/cart.jpg"
            alt="cart"
            width={30}
            height={30}
            style={{ position: "relative", left: "30px" }}
          />
          <Link
            href="/cart"
            style={{
              color: "black",
              textDecoration: "none",
              fontSize: "large",
              marginRight: "20px",
              position: "relative",
              left: "20px"
            }}
          >
            Cart
          </Link>

          <Image
            src="/Images/seller.webp"
            alt="seller"
            width={30}
            height={30}
            style={{ position: "relative", left: "30px" }}
          />
          <Link
            href="/seller"
            style={{
              color: "black",
              textDecoration: "none",
              fontSize: "large",
              marginRight: "20px",
              position: "relative",
              left: "20px"
            }}
          >
            Become a Seller
          </Link>

          <img
            src="/Images/dots.jpg"
            alt="dot"
            width="30px"
            style={{ position: "relative", left: "10px" }}
          />
        </div>
      </header>
    </div>
  );
}
