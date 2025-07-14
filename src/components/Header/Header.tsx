import { Github, Linkedin, Mail, Menu } from "lucide-react";

export default function Header() {
    return (
        <div className="fixed top-0 w-full z-50 bg-white">
            <header className="flex items-center h-18 bg-white sm:justify-between px-5 shadow-md justify-between">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600">
                    {'< '}Breno Façanha{' />'}
                </div>
                <div className="hidden md:flex md:items-center md:text-gray-800 md:font-medium md:space-x-8 sm:text-md ">
                    <a href="" className="hover:scale-110 hover:text-gray-900 duration-200 transform">Início</a>
                    <a href="" className="hover:scale-110 hover:text-gray-900 duration-200 transform">Sobre</a>
                    <a href="" className="hover:scale-110 hover:text-gray-900 duration-200 transform">Tecnologias</a>
                    <a href="" className="hover:scale-110 hover:text-gray-900 duration-200 transform">Projetos</a>
                    <a href="" className="hover:scale-110 hover:text-gray-900 duration-200 transform">Contato</a>
                </div>
                <div className="hidden md:flex md:items-center md:space-x-4">
                    <button className="hover:bg-gray-100 px-2 py-2 rounded-md"><Github color="black" size={17} /></button>
                    <button className="hover:bg-gray-100 px-2 py-2 rounded-md"><Linkedin color="black" size={17}/></button>
                    <button className="hover:bg-gray-100 px-2 py-2 rounded-md"><Mail color="black" size={17}/></button>
                </div>
                <div className="md:hidden ">
                    <button className="hover:bg-gray-100 rounded-xl transform transition duration-400 p-3">
                        <Menu color="black" size={20}/>
                    </button>
                </div>
            </header>
      </div>
    )
}