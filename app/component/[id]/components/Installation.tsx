import { ScriptCopyBtn } from "@/components/ui/script-copy-button";

export default function Installation() {
    const customCommandMap = {
        npm: "npx shadcn@latest add https://ui.krishdev.xyz/r/dynamic-scroll.json",
        yarn: "yarn shadcn@latest add https://ui.krishdev.xyz/r/dynamic-scroll.json",
        pnpm: "pnpm dlx shadcn@latest add https://ui.krishdev.xyz/r/dynamic-scroll.json",
        bun: "bunx shadcn@latest add https://ui.krishdev.xyz/r/dynamic-scroll.json",
    };
    return (
        <div className="max-w-6xl mx-auto mt-10">
            <h1 className="text-2xl font-bold text-gray-900">Installation</h1>
            <div className="border-b border-neutral-300 py-1"/>

            <h2 className="text-lg font-semibold text-gray-800 mt-6">
                Run the following command
            </h2>

            <ScriptCopyBtn
                showMultiplePackageOptions={true}
                codeLanguage="shell"
                lightTheme="nord"
                darkTheme="vitesse-dark"
                commandMap={customCommandMap}
            />
        </div>
    )
}