import Hero from "@/components/Hero";
import { ProductGrid } from "@/components/productgrid";
import SummerCareTips from "@/components/SummerCareTips";
import TopBrands from "@/components/TopBrands";


export default function Home() {
  return (
    <div className="">
        <Hero></Hero>
        <ProductGrid></ProductGrid>
        <SummerCareTips></SummerCareTips>
        <TopBrands></TopBrands>
    </div>
  );
}
