import Image from "next/image";

interface CardTecnologyProps {
    url: string;
    titulo: string;
    description: string;
}

export default function CardTecnology({ url, titulo, description }: CardTecnologyProps) {
    return (
        <div className="sm:w-64 sm:h-64
            flex flex-col items-center justify-around 
            w-full h-64 border-1 border-gray-200 text-center
            bg-white  rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <Image src={url} alt=""  width={30}/>
            <h2 className="text-black font-semibold">{titulo}</h2>
            <p className="text-gray-400">{description}</p>
        </div>
    )
}