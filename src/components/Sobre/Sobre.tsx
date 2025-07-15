import { Download, MessageCircle, MoveDown } from "lucide-react";
import CardSobre from "../CardSobre/CardSobre";

export default function Sobre() {
    return (
        <div className="w-full min-h-screen  justify-around bg-gray-50 flex flex-col items-center pt-25 text-center px-2 sm:pt-40">
            <p className="bg-[#F1EBFD] px-5 py-2 text-sm rounded-2xl text-[#8C36EA] font-bold">Disponivel para novos projetos</p>
            <p className="text-6xl text-black font-extrabold pt-10 m-0">Olá, eu sou</p>
            <p className="text-6xl text-[#8C36EA] font-extrabold">Breno Façanha</p>
            <p className="text-gray-500 text-2xl font-medium pt-4">Desenvolvedor Full Stack</p>
            <p className="text-gray-500 text-xl font-medium p-0 m-0 pt-5"> Especializado em criar experiências digitais e modernas e funcionais</p>
            <p className="text-gray-500 text-xl font-medium p-0 m-0">Transformo ideias em código limpo e soluções eficientes</p>
            <div className="w-full py-8 flex justify-center items-center flex-col gap-6 sm:flex-row">
                <button className="w-70 h-12 bg-purple-600 rounded-lg text-sm font-bold flex items-center justify-center gap-4 cursor-pointer">
                    <MessageCircle size={15} strokeWidth={2.5} />
                    <p className="tracking-wide text-base">
                        Vamos Conversar
                    </p>
                </button>
                <button className="w-70 h-12 bg-white  rounded-lg text-gray-700 text-sm font-bold flex items-center justify-center gap-4 border border-gray-300 cursor-pointer">
                    <Download  size={15} strokeWidth={2.5}/>
                    <p className="tracking-wide text-base">
                        Download CV
                    </p>
                </button>
            </div>
            <div className="flex flex-col w-full pt-5 h-auto sm:flex-row sm:justify-center bg-gray-50">
                <CardSobre  value="1" description="Anos de Experiência"/>
                <CardSobre  value="4" description="Projetos Concluidos"/>
                <CardSobre  value="9" description="Tecnologias"/>
            </div>
            <div className="hidden sm:animate-bounce sm:flex h-auto justify-end items-center">
                <MoveDown color="gray"/>
            </div>
        </div>
    );
}