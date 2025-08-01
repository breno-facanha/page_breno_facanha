import Contact from "@/src/components/Contact/Contact";
import Header from "@/src/components/Header/Header";
import MyProject from "@/src/components/MyProject/MyProject";
import Sobre from "@/src/components/Sobre/Sobre";
import Technology from "@/src/components/Technology/Technology";
 import { ToastContainer } from 'react-toastify';


export default function Home() {
  return (
    <div className="w-full h-screen bg-gray-50">
      <Header />
      <Sobre />
      <Technology />
      <MyProject />
      <Contact />
      <ToastContainer 
        position="top-right"
        autoClose={4000}
        theme="dark"
      />
    </div>
  );
}