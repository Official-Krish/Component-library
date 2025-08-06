import { Button } from "./ui/button";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";

export default function LandingPage() {

    const icons = [
        {
            name: "Next.js",
            icon: <TbBrandNextjs className="w-9 h-9"/>
        },
        {
            name: "React",
            icon: <FaReact className="w-9 h-9"/> 
        },
        {
            name: "Tailwind CSS",
            icon: <RiTailwindCssFill className="w-9 h-9"/> 
        },
        {
            name: "Motion",
            icon: <TbBrandFramerMotion className="w-9 h-9"/> 
        }
    ]
    return (
        <div className="grid grid-cols-2">
            <div className="p-10 mt-40">
                <h1 className="relative mb-6 max-w-4xl text-left text-4xl font-bold tracking-tight text-zinc-700 md:text-7xl">
                    Make your 
                    <br/>
                    <span> websites look</span>
                    <br/>
                    look 20x better
                </h1>

                <h2 className="mb-8 max-w-2xl text-left text-sm tracking-wide text-zinc-500 antialiased sm:text-xl">
                    Copy paste the most trending components and use them in your websites without having to worry about styling and animations.
                </h2>
                <div className="flex space-x-4">
                    <Button className="bg-neutral-900 text-white hover:bg-neutral-800 cursor-pointer py-7 rounded-xl px-8 hover:shadow-2xl transition duration-200">
                        Browse Components
                    </Button>
                    <Button className="bg-neutral-100 text-black hover:shadow-md cursor-pointer px-8 py-7 rounded-xl border border-neutral-200">
                        Custom Components
                    </Button>
                </div>
                <div className="py-6 flex">
                    {icons.map((icon, index) => (
                        <div key={index} className="flex items-center mr-3 mb-2">   
                            <span className="text-2xl mr-2 text-neutral-600">{icon.icon}</span>
                            <span className="shrink-0 text-sm font-semibold text-neutral-500">{icon.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}