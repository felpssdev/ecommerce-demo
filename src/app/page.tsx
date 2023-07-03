import BrandsSection from "./components/BrandsSection";
import Header from "./components/Header";
import PromoSection from "./components/PromoSection";
import SearchBar from "./components/SearchBar";
import SneakerSection from "./components/SneakerSection";

export default function Home() {
  return (
    <main className="flex flex-col justify-center px-10 overflow-y-scroll scrollbar-hide">
      <Header />
      <SearchBar />
      <BrandsSection />
      <PromoSection />
      <SneakerSection />
    </main>
  )
}
