import { Github, Linkedin, Mail, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }
    function closeMenu() {
        setIsOpen(false);
    }
    console.log(isOpen);
    return (
        <div className="fixed top-0 w-full z-50 bg-white">
            <header className="flex items-center h-18 bg-white sm:justify-between px-5 shadow-md justify-between">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600">
                    {'< '}Breno Façanha{' />'}
                </div>
                <div className="hidden md:flex md:items-center md:text-gray-800 md:font-medium md:space-x-8 sm:text-md ">
                    <a href="#" className="hover:scale-110 hover:text-gray-900 duration-200 transform">Início</a>
                    <a href="#sobre" className="hover:scale-110 hover:text-gray-900 duration-200 transform">Sobre</a>
                    <a href="#tec" className="hover:scale-110 hover:text-gray-900 duration-200 transform">Tecnologias</a>
                    <a href="#project" className="hover:scale-110 hover:text-gray-900 duration-200 transform">Projetos</a>
                    <a href="#contact" className="hover:scale-110 hover:text-gray-900 duration-200 transform">Contato</a>
                </div>
                <div className="hidden md:flex md:items-center md:space-x-4">
                    <a href="https://github.com/breno-facanha" target="_blank" className="hover:bg-gray-100 px-3 py-3 rounded-xl"><Github color="black" size={17} /></a>
                    <a href="https://www.linkedin.com/in/breno-fa%C3%A7anha-5a57a3b6/" target="_blank" className="hover:bg-gray-100 px-3 py-3 rounded-xl"><Linkedin color="black" size={17}/></a>
                    <a href="mailto:brenofacanha.ti@gmail.com" target="_blank" className="hover:bg-gray-100 px-3 py-3 rounded-xl"><Mail color="black" size={17}/></a>
                </div>
                <div className="md:hidden ">
                    <button 
                        className="hover:bg-gray-100 rounded-xl transform transition duration-400 p-3"
                        onClick={toggleMenu}>
                        <Menu color="black" size={20}/>
                    </button>
                </div>
                {isOpen && (
                    <div className="w-full absolute top-16 right-0 bg-white shadow-lg rounded-lg  z-50">
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="block hover:text-purple-700 text-gray-900 hover:bg-gray-200 pl-5 py-2 font-semibold" onClick={closeMenu}>Início</a>
                            </li>
                            <li>
                                <a href="#sobre" className="block hover:text-purple-700 text-gray-900 hover:bg-gray-200 pl-5 py-2 font-semibold" onClick={closeMenu}>Sobre</a>
                            </li>
                            <li>
                                <a href="#tec" className="block hover:text-purple-700 text-gray-900 hover:bg-gray-200 pl-5 py-2 font-semibold" onClick={closeMenu}>Tecnologias</a>
                            </li>
                            <li>
                                <a href="#project" className="block hover:text-purple-700 text-gray-900 hover:bg-gray-200 pl-5 py-2 font-semibold" onClick={closeMenu}>Projetos</a>
                            </li>
                            <li>
                                <a href="" className="block hover:text-purple-700 text-gray-900 hover:bg-gray-200 pl-5 py-2 font-semibold" onClick={closeMenu}>Contato</a>
                            </li>
                        </ul>
                        </div>
                )}
            </header>
      </div>
    )
}