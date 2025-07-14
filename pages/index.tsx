import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <div>
      <header className="flex items-center h-25 bg-white justify-between px-5 shadow-md">
        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          Breno Façanha
        </div>
        <div className="flex items-center text-gray-700 font-medium ">
          <a href="" className="hover:text-xl pr-7">Inicio</a>
          <a href="" className="hover:text-xl pr-7">Sobre</a>
          <a href="" className="hover:text-xl pr-7">Tecnologias</a>
          <a href="" className="hover:text-xl pr-7">Projetos</a>
          <a href="" className="hover:text-xl pr-7">Contato</a>
        </div>
        <div className=" flex items-center gap-4">
          <button><FaGithub color="black" size={20}/></button>
          <button><FaLinkedin color="blue" size={20}/></button>
          <button><MdEmail color="black" size={22}/></button>
        </div>
      </header>
    </div>
  );
}
