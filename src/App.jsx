import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HeroSection from "./components/hero_Section/HeroSection";
import ProductBoard from "./components/product_board/ProductBoard";
import { ProductProvider } from "./provider";

export default function App() {
  return (
    <>
      <ProductProvider>
        <Header />
        <HeroSection />
        <ProductBoard />
        <Footer />
      </ProductProvider>
    </>
  );
}
