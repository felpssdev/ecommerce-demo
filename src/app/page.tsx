import BrandsSection from "@/components/HomePage/BrandsSection";
import Header from "@/components/HomePage/Header";
import PromoSection from "@/components/HomePage/PromoSection";
import SearchBar from "@/components/HomePage/SearchBar";
import SneakerSection from "@/components/HomePage/SneakerSection";

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
