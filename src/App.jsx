import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HeroSection from "./components/hero_Section/HeroSection";
import ProductBoard from "./components/product_board/ProductBoard";
import { ProductProvider, SearchProvider } from "./provider";
export default function App() {
  return (
    <>
      <ProductProvider>
        <SearchProvider>
          <Header />
          <HeroSection />
          <ProductBoard />
          <Footer />
          <ToastContainer />
        </SearchProvider>
      </ProductProvider>
    </>
  );
}
