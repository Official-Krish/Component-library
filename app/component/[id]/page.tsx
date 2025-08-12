"use client";
import { useParams } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { COMPONENTS } from "@/constants/DetailedComponent";
import { type Component } from "@/types";
import { useState } from "react";
import { Eye, SquareTerminal } from "lucide-react";
import Code from "./components/CodeBlock";
import Installation from "./components/Installation";

export default function Component() {
    const [tab, setTabs] = useState<"Preview" | "Code">("Preview");
    const params = useParams();
    const search = (params as { id?: string }).id || "";
    
    const component = COMPONENTS.find(
        (c) => c.id === search
    );

    return (
        <div className="flex bg-[#ffffff]">
            <Sidebar />
            <div className="max-w-6xl mx-auto mt-10">
                <h1 className="text-2xl font-bold text-gray-900">
                    {component ? component.name : "Component not Found"}
                </h1>
                <p className="text-gray-600 my-3">
                    {component ? component.shortDescription : "No short description available."}
                </p>
                {component && (
                    (component.tags).map((tag, index) => (
                        <span key={index} className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-md">
                            {tag}
                        </span>
                    ))
                )}
                <div className="py-10 space-x-4 flex items-center">
                    <button
                    className={`${tab === "Preview" ? "bg-zinc-200 font-semibold" : ""} rounded-lg px-8 py-2 text-neutral-800 transition-colors duration-200 cursor-pointer flex items-center`}
                        onClick={() => setTabs("Preview")}
                    >
                        <Eye className="h-4 w-4 mr-2" />
                        <span>Preview</span>
                    </button>
                    <button 
                        className={`${tab === "Code" ? "bg-zinc-200 font-semibold" : ""} rounded-lg px-8 py-2 text-neutral-800 transition-colors duration-200 ease-in-out ml-2 cursor-pointer flex items-center`} 
                        onClick={() => setTabs("Code")}
                    >
                        <SquareTerminal className="h-4 w-4 mr-2" />
                        <span>Code</span>
                    </button>
                </div>

                {tab === "Preview" && (
                    <div className="rounded-lg p-4 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-[600px] w-full">
                        {component ? component.Code : "No preview available."}
                    </div>
                )}

                {tab === "Code" && (
                    <Code search={search} />
                )}

                <Installation id={search}/>

                <div className="my-8 rounded-xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
                    <div className="flex items-start">
                        <span aria-hidden="true" className="mr-4 mt-1 h-8 w-1 rounded-full bg-gradient-to-b from-blue-500 to-indigo-500" />
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed whitespace-pre-line">
                            {component ? component.description : "No description available."}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}