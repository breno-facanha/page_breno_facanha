import CardProject from "../CardProject/CardProject";

export default function MyProject() {
    return (
        <div className="w-full h-auto bg-gray-50 flex flex-col items-center justify-center pt-20 px-4">
            <div className="flex gap-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600">
            <span className="text-black text-2xl font-bold ">Meus</span>
                Projetos 
            </div>
             <div className="w-full text-center mt-4 px-3">
                <p className="w-full text-gray-500 text-xl font-medium">
                    Uma seleção dos projetos que desenvolvi, demonstrando minhas habilidades e paixão por criar soluções inovadoras
                </p>
            </div>
             <div className="w-full py-8 flex justify-center items-center flex-col gap-6 sm:flex-row">
                <button className="w-50 h-12 bg-purple-600 rounded-lg text-sm font-bold flex items-center justify-center gap-4 cursor-pointer">
                    <p className="tracking-wide text-base">
                        Todos os Projetos
                    </p>
                </button>
                <button className="w-50 h-12 bg-white  rounded-lg text-gray-700 text-sm font-bold flex items-center justify-center gap-4 border border-gray-300 cursor-pointer">
                    <p className="tracking-wide text-base">
                        Projeto em Destaque
                    </p>
                </button>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-20 w-full max-w-6xl mb-10">
                <CardProject 
                    imageUrl="focus-timer.png" 
                    title="Focus Timer" 
                    description="Cronometro no estilo pomodoro, ideal para estudos e concentração em alguma demanda" 
                    technologies={["Html", "Css", "JavaScript"]}
                    githubLink= "https://github.com/breno-facanha/projeto-explorer-013"
                    liveDemoLink= "https://breno-facanha.github.io/projeto-explorer-013/"
                />
                <CardProject 
                    imageUrl="to-do-list.png" 
                    title="Gerenciador de Tarefas" 
                    description="Portfólio pessoal, onde apresento meus projetos e habilidades como desenvolvedor web" 
                    technologies={["JavaScript", "React", "Tailwind CSS"]}
                    githubLink= "https://github.com/breno-facanha/lista-de-tarefas"
                    liveDemoLink= "https://lista-de-tarefas-smoky-zeta.vercel.app/"
                />
            </div>
        </div>
    )
}