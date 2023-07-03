import BrandsSection from "./components/BrandsSection";
import PromoSection from "./components/PromoSection";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <main className="flex flex-col justify-center px-10">
      <SearchBar />
      <BrandsSection />
      <PromoSection />
    </main>
  )
}
