import CardProject from "../CardProject/CardProject";

export default function MyProject() {
    return (
        <div id="project" className="w-full min-h-screen bg-gray-50 flex flex-col items-center pt-25 px-4">
            <div className="flex gap-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600">
            <span className="text-black text-3xl font-bold ">Meus</span>
                Projetos 
            </div>
             <div className="w-full text-center mt-4 px-3">
                <p className="w-full text-gray-500 text-xl font-medium">
                    Uma seleção dos projetos que desenvolvi, demonstrando minhas habilidades e paixão por criar soluções inovadoras
                </p>
            </div>
             <div className="w-full py-8 flex justify-center items-center flex-col gap-6 sm:flex-row">
                <a href="https://github.com/breno-facanha" className="w-50 h-12 bg-purple-600 rounded-lg text-sm font-bold flex items-center justify-center gap-4 cursor-pointer">
                    <p className="tracking-wide text-base">
                        Todos os Projetos
                    </p>
                </a>
               
            </div>
            <div className=" flex flex-wrap justify-center items-center gap-20 w-full max-w-6xl mb-10 ">
                <CardProject 
                    imageUrl="/focus-timer.png" 
                    title="Focus Timer" 
                    description="Cronometro no estilo pomodoro, ideal para estudos e concentração em alguma demanda" 
                    technologies={["Html", "Css", "JavaScript"]}
                    githubLink= "https://github.com/breno-facanha/projeto-explorer-013"
                    liveDemoLink= "https://breno-facanha.github.io/projeto-explorer-013/"
                />
                <CardProject 
                    imageUrl="/anime-flix.png" 
                    title="Anime Flix" 
                    description="Cadastro de animes, onde é possível cadastrar e vizualizar notas dos animes cadastrados." 
                    technologies={["JavaScript", "React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL"]}
                    githubLink= "https://github.com/breno-facanha/front-anime"
                    liveDemoLink= "https://front-anime-lovat.vercel.app/animes"
                />
                <CardProject 
                    imageUrl="/to-do-list.png" 
                    title="Gerenciador de Tarefas" 
                    description="Uma aplicação para gerenciar suas tarefas diárias, com funcionalidades de adicionar, remover e marcar como concluídas" 
                    technologies={["JavaScript", "React", "Tailwind CSS"]}
                    githubLink= "https://github.com/breno-facanha/lista-de-tarefas"
                    liveDemoLink= "https://lista-de-tarefas-smoky-zeta.vercel.app/"
                />
                <CardProject 
                    imageUrl="/mamadasRegister.png" 
                    title="Historico de Mamadas" 
                    description="App para registrar mamadas da minha bebê, com funções de adicionar quantidade em ml, ver histórico e incluir observações."
                    technologies={["ReactNative", "Expo", "TypeScript", "StyleSheet", "Node.js", "Express", "PostgreSQL", "Prisma"]}
                    githubLink= "https://github.com/breno-facanha/baby-feeding-monitoring"
                    liveDemoLink= "https://github.com/breno-facanha/api-baby-feeding-monitoring"
                />
            </div>
        </div>
    )
}