import Contact from "@/src/components/Contact/Contact";
import Header from "@/src/components/Header/Header";
import MyProject from "@/src/components/MyProject/MyProject";
import Sobre from "@/src/components/Sobre/Sobre";
import Technology from "@/src/components/Technology/Technology";

export default function Home() {
  return (
    <div className="w-full h-screen bg-gray-50">
      <Header />
      <Sobre />
      <Technology />
      <MyProject />
      <Contact />
    </div>
  );
}