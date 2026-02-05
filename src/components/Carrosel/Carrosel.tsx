import Image from "next/image";

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
           <p className="w-15 mt-1 ">
            {imagens.includes(tech) ? (
                <Image width={150} height={150} src={`/${tech}.png`} alt={tech} className="w-10 h-10 mb-2" />  
            ) : (
                <Image width={150} height={150} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.toLowerCase()}/${tech.toLowerCase()}-original.svg`} alt={tech} />
            )}
            </p>
           
        </span>
    );

    return (
        <div className="w-full overflow-hidden py-4 bg-gray-50">
            <div className="flex">
                <div className="flex whitespace-nowrap gap-8 animate-marquee">
                    {technologies.map((tech, idx) => (
                        <TechBadge key={idx} tech={tech} />
                    ))}
                </div>
                <div className="flex whitespace-nowrap gap-8 animate-marquee" aria-hidden="true">
                    {technologies.map((tech, idx) => (
                        <TechBadge key={`duplicate-${idx}`} tech={tech} />
                    ))}
                </div>
            </div>
            
            <style jsx global>
                {`
                    @keyframes marquee {
                        from { transform: translateX(0); }
                        to { transform: translateX(-100%); }
                    }
                    .animate-marquee {
                        animation: marquee 20s linear infinite;
                    }
                `}
            </style>
        </div>
    );
}