import Header from "@/src/components/Header/Header";
import Sobre from "@/src/components/Sobre/Sobre";


export default function Home() {
  return (
    <div className="w-full h-screen bg-gray-50">
      <Header />
      <Sobre />
    </div>
  );
}