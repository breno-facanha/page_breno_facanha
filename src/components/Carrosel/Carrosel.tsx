export default function Carrosel() {
    const technologies = [
        "Html5",
        "Css3",
        "JavaScript",
        "React",
        "Nextjs",
        "TailwindCSS",
        "Typescript",
        "Nodejs",
        "Express",
        "Prisma",
        "PostgreSQL",
        "MySQL",
        "MongoDB"
    ];

    const imagens = [
        "html-5.png"

    ]

    const TechBadge = ({ tech }: { tech: string })  => (
        <span className="flex flex-col justify-center items-center w-44 hover:scale-115 transition-transform duration-300 ease-in-out">
           <p className="w-10 mt-10 ">
            {imagens.includes(tech) ? (
                <img src={tech} alt={tech} className="w-10 h-10 mb-2" />  
            ) : (
                <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.toLowerCase()}/${tech.toLowerCase()}-original.svg`} alt={tech} />
            )}
            </p>
            <p className="text-gray-400 font-light text-lg mt-2">
                {tech}
            </p>
           
        </span>
    );

    return (
        <div className="w-full overflow-hidden py-4 bg-gray-50">
            <div 
                className="flex whitespace-nowrap gap-8"
                style={{
                    animation: 'marquee 20s linear infinite'
                }}
            >
                {technologies.map((tech, idx) => (
                    <TechBadge key={idx} tech={tech} />
                ))}
                {technologies.map((tech, idx) => (
                    <TechBadge key={idx + 100} tech={tech} />
                ))}
            </div>
            
            <style jsx global>
                {`
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                `}
            </style>
        </div>
    );
}