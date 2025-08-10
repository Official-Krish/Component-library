"use client";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { useAppDispatch } from "@/lib/hooks";
import { openSearchModal } from "@/lib/features/searchModalSlice";
import { useEffect } from "react";

export default function Appbar() {
    const dispatch = useAppDispatch();
    const navContent = [
        {
            name: "Componets",
            href: "/components"
        },
        {
            name: "Templates",
            href: "/templates"
        },
        {
            name: "Pricing",
            href: "/pricing"
        }, 
        {
            name: "Showcase",
            href: "/showcase"
        }
    ];
    const Socials = [
        {
            name: "GitHub",
            href: "https://github.com/Official-Krish",
            icon: <FaGithub className="w-5 h-5" />
        },
        {
            name: "Twitter",
            href: "https://x.com/KrishAnand0103",
            icon: <FaXTwitter className="w-5 h-5" />

        },
        {
            name: "Discord",
            href: "",
            icon: <FaDiscord className="w-5 h-5"/>

        }
    ]

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                dispatch(openSearchModal());
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [dispatch]);

    return (
        <header className="sticky py-4 bg-neutral-100 border-b border-neutral-200">
            <div className="flex items-center justify-between px-8">
                <div className="flex items-center justify-between w-[680px]">
                    <div className="flex items-center">
                        <img src="https://ui.aceternity.com/logo.png" alt="Logo" className="w-7 h-7 mr-2" />
                        <h1 className="text-neutral-800 font-bold text-2xl">Component UI</h1>
                    </div>
                    <div>
                        {navContent.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="px-4 text-neutral-600 hover:text-neutral-800"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="flex">
                        {Socials.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                className="text-neutral-600 hover:text-neutral-800 mr-6"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                    <button
                        className="w-66 px-4 py-2 rounded-xl text-neutral-500 font-normal focus:outline-none border border-neutral-300 flex items-center text-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer"
                        onClick={() => dispatch(openSearchModal())}
                    >
                        <CiSearch className="w-5 h-5 mr-2" />
                        Search Components
                        <span className="text-neutral-400 text-xs ml-2 bg-neutral-200 rounded-lg px-2 py-1">
                            ⌘ K
                        </span>
                    </button>
                </div>
            </div>
        </header>
    )
}