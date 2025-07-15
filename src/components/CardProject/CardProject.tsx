export default function CardProject() {
    return(
        <div className="w-80 h-96 border-1 border-gray-500 text-center rounded-2xl">
            <div className="h-40 bg-red-500">
                <img src="" alt="Project Thumbnail" className="w-full h-40 object-cover rounded-t-2xl"/>
            </div>
            <div className="text-start pl-5">
                <h2 className="text-xl font-bold mt-4 text-black">Nome do Projeto</h2>
                <p className="text-gray-600 mt-2 text-md">Descrição breve do projeto, destacando suas principais funcionalidades e tecnologias utilizadas.</p>
            </div>
            <div className="text-black flex gap-2 items-center pl-5 mt-4">
                <p className="w-20text-black px-1 py-1 bg-gray-200 rounded-lg">React</p>
                <p className="w-20text-black px-1 py-1 bg-gray-200 rounded-lg">Node.Js</p>
                <p className="w-20text-black px-1 py-1 bg-gray-200 rounded-lg">Express</p>
                <p className="w-20text-black px-1 py-1 bg-gray-200 rounded-lg">Express</p>
            </div>
            <div className="mt-2 text-black justify-between items-center flex px-5">

                <a href="">Git Hub</a>
                <a href="">Acessar Projeto</a>
            </div>
        </div>
    )
}