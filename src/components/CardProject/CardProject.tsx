import { Github, SquareArrowOutUpRight } from "lucide-react"
import Image from "next/image";

interface CardProjectProps {
    imageUrl: string;
    title: string;
    description: string;
    technologies: string[];
    githubLink: string;
    liveDemoLink?: string;
}

export default function CardProject({ imageUrl, title, description, technologies, githubLink, liveDemoLink }: CardProjectProps) {
    return(
        <div className="w-80 h-auto border-1 text-center rounded-2xl hover:scale-105 transition-all duration-500 ease-in-out shadow-lg bg-white mt-8">
            <div className="h-40 rounded-t-2xl float-top">
                <Image src={imageUrl} alt="Project Thumbnail" className="w-full h-40 rounded-t-2xl object-cover max-h-full"/>
            </div>
            <div className="text-start pl-5 pr-5">
                <h2 className="text-xl font-bold mt-4 text-black">{title}</h2>
                <p className="text-gray-600 mt-2 text-md line-clamp-3">{description}</p>
            </div>
            <div className="text-black h-15 flex flex-wrap justify-start gap-2 items-start pl-5 mt-4 ">
                {technologies.map((tech, index) => (
                    <p key={index} className="text-black px-2 py-1 text-sm font-semibold bg-gray-200 rounded-lg line-clamp-2">
                        {tech}
                    </p>
                ))}
            </div>
            <div className=" text-black justify-between items-center flex px-5 mt-5 mb-2 ">
                <a href={githubLink} className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors duration-300" target="_blank">
                    <Github className="text-black" size={17} />
                    <span className="text-sm">Git Hub</span>
                </a>
                <a href={liveDemoLink} className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors duration-300" target="_blank">
                    <SquareArrowOutUpRight size={16} />
                    <span className="text-sm">Live Demo</span>
                </a>
            </div>
        </div>
    )
}