import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Contact() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [assunto, setAssunto] = useState("");
    const [mensagem, setMensagem] = useState("");

    function handleSubmit() {
        toast.success("Mensagem enviada com sucesso!")
    }


    return (
        <div id="contact" className="w-full min-h-screen bg-gray-50 flex flex-col items-center pt-25 px-4">
            <div className="flex gap-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600">
                <span className="text-black text-3xl font-bold ">Vamos</span>
                Conversar 
            </div>
             <div className="w-full text-center mt-4 px-3">
                <p className="w-full text-gray-500 text-xl font-medium">
                    Tem um projeto em mente? Vamos transformar sua ideia em realidade. Entre em contato comigo!
                </p>
            </div>
            <div className="w-full flex flex-col sm:flex-row  gap-8 justify-center mt-10 mb-10">
                <div className="sm:w-[40%] h-[550px] sm:h-[500px] px-5 pt-4">
                    <h3 className="text-black text-2xl font-semibold">Entre em contato</h3>
                    <p className="text-gray-500 text-md">
                        Estou sempre aberto a discutir novos projetos, oportunidades criativas ou parcerias.
                        Não hesite em entrar em contato!
                    </p>
                    <div className="">
                        <a href="mailto:brenofacanha.ti@gmail.com" className="group flex items-center gap-3 mt-4 border border-gray-200 rounded-lg p-4 hover:scale-102 transition duration-500 cursor-pointer">
                            <div className=" group-hover:bg-gray-300 group-hover:duration-300 px-3 py-3 bg-gray-200 rounded-lg">
                                <Mail color="#7C3AED"/>
                            </div>
                            <div className="">
                                <p className="text-black">Email</p>
                                <p className="text-gray-500">brenofacanha.ti@gmail.com</p>
                            </div>
                        </a>
                        <a href="tel:+5585996853592" className="group flex items-center gap-3 mt-4 border border-gray-200 rounded-lg p-4 hover:scale-102 transition duration-500 cursor-pointer">
                            <div className="group-hover:bg-gray-300 group-hover:duration-300 px-3 py-3 bg-gray-200 rounded-lg">
                                <Phone color="#7C3AED"/>
                            </div>
                            <div className="">
                                <p className="text-black">Telefone</p>
                                <p className="text-gray-500">+ 55 (85) 99685-3592</p>
                            </div>
                        </a>
                        <div className="group flex items-center gap-3 mt-4 border border-gray-200 rounded-lg p-4 hover:scale-102 transition duration-500 cursor-pointer">
                            <div className="group-hover:bg-gray-300 group-hover:duration-300 px-3 py-3 bg-gray-200 rounded-lg">
                                <MapPin color="#7C3AED"/>
                            </div>
                            <div className="">
                                <p className="text-black">Localização</p>
                                <p className="text-gray-500">Fortaleza, CE</p>
                            </div>
                        </div>
                        <div className="flex flex-col mt-4 text-lg">
                            <p className="text-black font-semibold mb-3">Me siga nas redes sociais</p>
                            <div className="flex gap-5">
                                <a href="https://github.com/breno-facanha" target="_blank" className="bg-gray-200 px-4 py-3 rounded-xl hover:scale-110 transition duration-500"><Github color="black" size={22} /></a>
                                <a href="https://www.linkedin.com/in/breno-fa%C3%A7anha-5a57a3b6/" target="_blank" className="bg-gray-200 px-4 py-3 rounded-xl hover:scale-110 transition duration-500"><Linkedin color="black" size={22}/></a>
                                <a href="https://wa.me/5585996853592" target="_blank" className="bg-gray-200 px-4 py-3 rounded-xl hover:scale-110 transition duration-500"><FaWhatsapp color="black" size={23}/></a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="sm:w-[40%] h-[550px] sm:h-[500px] border-1 border-gray-200 rounded-2xl text-black px-5 pt-5">
                    <h3 className="text-black text-2xl font-semibold">Envie uma Mensagem</h3>
                    <p className="text-gray-500 text-md">Preencha o formulário abaixo e retornarei o contato o mais breve possível.</p>
                    <div className="mt-5">
                        <div className="flex flex-col sm:flex-row gap-2">
                            <div className="flex flex-col w-full">
                                <label htmlFor="" className="text-black font-semibold pl-0.5 tracking-wide">Nome *</label>
                                <input className="border border-gray-200 rounded-lg outline-none pl-3 py-2 placeholder:text-sm " type="text" placeholder="Seu nome completo" />
                            </div>
                            <div className="flex flex-col w-full">
                                <label htmlFor="" className="text-black font-semibold pl-0.5 tracking-wide ">Email *</label>
                                <input className="border border-gray-200 rounded-lg outline-none pl-3 py-2 placeholder:text-sm" type="text" placeholder="seu@email.com" />
                            </div>
                        </div>
                        <div className="flex flex-col w-full mt-4">
                            <label htmlFor="" className="text-black font-semibold pl-0.5 tracking-wide ">Assunto *</label>
                            <input className="border border-gray-200 rounded-lg outline-none pl-3 py-2 placeholder:text-sm" type="text" placeholder="Assunto da mensagem" />
                        </div>
                        <div className="flex flex-col w-full mt-4">
                            <label htmlFor="" className="text-black font-semibold pl-0.5 tracking-wide ">Mensagem *</label>
                            <textarea className="border h-20 sm:h-32 border-gray-200 rounded-lg outline-none pl-3 pt-2 resize-none placeholder:text-sm" placeholder="Conte-me sobre seu projeto..."></textarea>
                        </div>
                        <div className="w-full flex pt-5">
                            <button onClick={handleSubmit} className="w-full h-12 bg-[#7C3AED] text-white rounded-lg pl-3 text-sm font-bold flex items-center justify-center gap-4 cursor-pointer">
                                <p className="tracking-wide text-base">
                                    Enviar Mensagem
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}