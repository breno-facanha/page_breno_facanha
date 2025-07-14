interface CardSobreProps {
    value: string;
    description: string;
}

export default function CardSobre({ value, description }: CardSobreProps) {
    return (
            <div className="flex flex-col items-center w-full h-25">
                <div className="flex text-[#8C36EA] text-4xl font-black gap-0.5">
                    <p>{value}</p>
                    <p>+</p>
                </div>
                <p className="text-gray-500">{description}</p>
            </div>
    )
}
