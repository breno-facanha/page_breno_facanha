export default function Contact() {
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
                <div className="sm:w-[40%] h-[550px] sm:h-[500px] bg-red-200"></div>
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
                            <button className="w-full h-12 bg-[#7C3AED] text-white rounded-lg pl-3 text-sm font-bold flex items-center justify-center gap-4 cursor-pointer">
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