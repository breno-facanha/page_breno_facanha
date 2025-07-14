import { Github, Linkedin, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <div>
      <header className="flex items-center h-18 bg-white justify-between px-5 shadow-md">
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600">
          {'< '}Breno Façanha{' />'}
        </div>
        <div className="flex items-center text-gray-800 font-medium space-x-8 text-md">
          <a href="" className="hover:scale-110 hover:text-gray-900 duration-200 transform">Início</a>
          <a href="" className="hover:scale-110 hover:text-gray-900 duration-200 transform">Sobre</a>
          <a href="" className="hover:scale-110 hover:text-gray-900 duration-200 transform">Tecnologias</a>
          <a href="" className="hover:scale-110 hover:text-gray-900 duration-200 transform">Projetos</a>
          <a href="" className="hover:scale-110 hover:text-gray-900 duration-200 transform">Contato</a>
        </div>
        <div className=" flex items-center space-x-4">
          <button className="hover:bg-gray-100 px-2 py-2 rounded-md"><Github color="black" size={17} /></button>
          <button className="hover:bg-gray-100 px-2 py-2 rounded-md"><Linkedin color="black" size={17}/></button>
          <button className="hover:bg-gray-100 px-2 py-2 rounded-md"><Mail color="black" size={17}/></button>
        </div>
      </header>
    </div>
  );
}