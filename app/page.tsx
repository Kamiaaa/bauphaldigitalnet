import ISPBanner from "./components/Banner";
import EllipseCarousel from "./components/Carousel";
import Services from "./components/Services";
export default function Home() {
  return (
    <>
      <EllipseCarousel />
      <Services />
      <ISPBanner/>
    </>
  );
}
