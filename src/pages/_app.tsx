




import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from "next/app";
// import Header from "@/Components/Header/header"
import Navbar from "@/Components/Navbars/navbar";
import Footer from "@/Components/Footer/footer";
import { CartProvider } from "@/context/CartContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Header/> */}
      <Navbar/>
     <CartProvider>
      <Component {...pageProps} />
      </CartProvider>
      
      <Footer/>
    </>
    
  );
}



