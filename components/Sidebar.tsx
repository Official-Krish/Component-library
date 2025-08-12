import { COMPONENTS } from "@/constants/DetailedComponent";
import { Component } from "@/types";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { motion } from "motion/react";

export default function Sidebar() {
    const components: Component[] = COMPONENTS;
    const router = useRouter();

    const grouped = useMemo(() => {
        const g: Record<string, Component[]> = {};
        for (const c of components) {
            const key = c.Category || "Uncategorized";
            if (!g[key]) g[key] = [];
            g[key].push(c);
        }
        Object.keys(g).forEach(k => g[k].sort((a, b) => a.name.localeCompare(b.name)));
        return Object.keys(g)
            .sort((a, b) => a.localeCompare(b))
            .map(k => ({ category: k, items: g[k] }));
    }, [components]);

    return (
        <div className="sticky w-[240px] h-screen overflow-auto">
            <div className="flex items-center justify-center pt-20 pb-2">
                <h1 className="mb-1 rounded-md px-2 py-1 text-lg font-semibold text-black">
                    Components
                </h1>
            </div>
            <div className="px-3 pb-10 space-y-2">
                {grouped.map(({ category, items }) => (
                    <div key={category}>
                        <div className="px-3 py-2 text-left text-sm font-semibold text-neutral-700">
                            {category}
                        </div>
                        <ul className="px-3 pb-2 space-y-1">
                            {items.map(item => (
                                <motion.li
                                    key={item.id}
                                    className="text-[14px] rounded px-2 py-1 cursor-pointer transition text-neutral-700 hover:text-neutral-900"
                                    title={item.description || ""}
                                    whileHover={{
                                        x: 8,
                                        scale: 1.06,
                                    }}
                                    transition={{
                                        duration: 0.05,
                                        ease: "linear",
                                    }}
                                    onClick={() => {
                                        router.push(`/component/${item.id}`);
                                    }}
                                >
                                    {item.name}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                ))}
                {grouped.length === 0 && (
                    <p className="text-[13px] text-black/70 px-1">No components found.</p>
                )}
            </div>
        </div>
    );
}
