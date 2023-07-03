import BrandsSection from "./components/BrandsSection";
import PromoSection from "./components/PromoSection";
import SearchBar from "./components/SearchBar";
import SneakerSection from "./components/SneakerSection";

export default function Home() {
  return (
    <main className="flex flex-col justify-center px-10 overflow-y-scroll scrollbar-hide">
      <SearchBar />
      <BrandsSection />
      <PromoSection />
      <SneakerSection />
    </main>
  )
}
