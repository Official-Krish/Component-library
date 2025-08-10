import Image from "next/image";
import { Button } from "../ui/button";

export default function Components() {
    const data = [
        {
            url: "https://aceternity.com/cdn-cgi/image/width=800/https://assets.aceternity.com/pro/hero-sections.png",
            title: "Component Packs",
            description: "Ever growing collection of components to help you ship more website features faster",
        }, 
        {
            url: "https://aceternity.com/cdn-cgi/image/width=1920/https://assets.aceternity.com/templates/cryptgen-1.webp",
            title: "Templates",
            description: "Professional, clean and modern templates to help you get more done.",
        }, 
        {
            url: "https://pro.aceternity.com/banner.png",
            title: "Pro Features",
            description: "Unlock the full potential of your projects with our Pro features.",
        }
    ]
    return (
        <section className="bg-gradient-to-b from-white/20 to-[125%] h-screen w-full">
            <div className="max-w-7xl mx-auto pt-20 px-4">
                <h1 className="text-3xl font-medium tracking-tight text-neutral-900 flex items-center justify-center">
                    Get more done with UI Pro
                </h1>
                <p className="mx-auto mt-2 max-w-4xl text-lg text-neutral-600">
                    UI offers free components while Pro gives you the best premium components and templates pack to help your website stand out. Professional, clean and modern components to help you get more done.
                </p>

                <div className="mt-20 grid grid-cols-3 gap-6">
                    {data.map((item, index) => 
                        <div key={index} className="relative bg-gray-200/50 w-[380px] h-[370px] rounded-3xl border border-gray-200 overflow-hidden group">
                            <div className="flex flex-col">
                                <div className="rounded-b-3xl overflow-hidden">
                                    <Image
                                        src={item.url}
                                        alt="Hero Sections"
                                        width={320}
                                        height={10}
                                        className="w-full h-64 group-hover:scale-105 group-hover:shadow-md transition-transform duration-150 ease-in-out"
                                    />
                                </div>
                                <div className="p-4">
                                    <h2 className="text-base font-medium text-neutral-700">
                                        {item.title}
                                    </h2>
                                    <p className="mt-3 max-w-xs text-sm font-normal text-neutral-500">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-16 flex items-center justify-center">
                    <Button className="bg-neutral-900 text-white hover:bg-neutral-800 cursor-pointer py-7 rounded-xl px-8 hover:shadow-2xl transition duration-200">
                        Explore Pro components and templates
                    </Button>
                </div>
            </div>
        </section>
    )
}