import Carrosel from "../Carrosel/Carrosel";
import CardTecnology from "../CardTecnology/CardTecnology";

export default function Technology() {
    return (
        <div id="tec" className="w-full h-screen flex flex-col justify-around items-center bg-gray-50 pt-25">
             <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600">
                Tecnologias 
                <span className="text-black text-2xl font-bold "> que Domino</span>
            </div>
            <div className="w-full text-center mt-4 px-3">
                <p className="w-full text-gray-500 text-xl font-medium">
                    Sempre aprendendo e me adaptando às tecnologias mais modernas do mercado
                </p>
            </div>
            <div className="w-full h-auto py-10 flex justify-center items-center overflow-hidden">
                <Carrosel />
            </div>
            <div className="w-full h-auto pt-10 flex flex-col justify-center items-center gap-5 sm:flex-row sm:gap-30 bg-gray-50 px-4">
                <CardTecnology 
                    url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    titulo="Front-End"
                    description="Interfaces modernas e responsivas com foco na experiência do usuário"
                />
                <CardTecnology
                    url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    titulo="Back-End"
                    description="Desenvolvimento de APIs robustas e escaláveis com Node.js e Express"
                />
            </div>
        </div>
        
    )
}