import BrandsStrip from "../components/home/BrandsStrip";
import BrowseByStyle from "../components/home/BrowseByStyle";
import Hero from "../components/home/Hero";
import NewArrivals from "../components/home/NewArrivals";
import Reviews from "../components/home/Reviews";
import TopSelling from "../components/home/TopSelling";

function Home() {
  return (
    <>
      <Hero />
      <BrandsStrip />
      <NewArrivals />
      <div className="mx-auto max-w-7xl px-4 lg:px-10">
        <hr className="border-black/10" />
      </div>
      <TopSelling />
      <BrowseByStyle />
      <Reviews />
    </>
  );
}

export default Home;
