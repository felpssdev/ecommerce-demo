import BrandsSection from "@/components/HomePage/BrandsSection";
import Header from "@/components/HomePage/Header";
import PromoSection from "@/components/HomePage/PromoSection";
import SearchBar from "@/components/HomePage/SearchBar";
import SneakerSection from "@/components/HomePage/SneakerSection";
import { Providers } from "@/contexts/filtersContext";

export default function Home() {
  return (
    <main className="flex flex-col justify-center px-10 overflow-y-scroll scrollbar-hide">
      <Header />
      <Providers>
        <SearchBar />
        <BrandsSection />
        <PromoSection />
        <SneakerSection />
      </Providers>
    </main>
  )
}
