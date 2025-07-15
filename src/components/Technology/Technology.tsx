import Carrosel from "../Carrosel/Carrosel";

export default function Technology() {
    return (
        <div className="w-full h-auto flex flex-col justify-center items-center gap-1 bg-gray-50 ">
             <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600">
                Tecnologias 
                <span className="text-black text-2xl font-bold "> que Domino</span>
            </div>
            <div className="w-full text-center mt-4 px-3">
                <p className="w-full text-gray-500 text-xl font-medium">
                    Sempre aprendendo e me adaptando às tecnologias mais modernas do mercado
                </p>
            </div>
            <Carrosel />
        </div>
        
    )
}