import { Keyboard } from "../customComponents/Keyboard";
import { CodeBlock } from "../ui/code-block";

export default function Showcasae () {
    const code = `import { Button } from "@nextui-org/react";
import { useState } from "react";
export default function DummyComponent() {
    const [count, setCount] = useState(0);
    return (
        <Button
            onPress={() => setCount(count + 1)}
            className="bg-blue-500 text-white hover:bg-blue-600"
        >
            Clicked {count} times
        </Button>
        <div
            className={cn(
                "[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] cursor-pointer",
                backlit && "bg-white/[0.2] shadow-xl shadow-white hover:shadow-black/20 transition-all duration-200",
            )}
        >
            <div
                className={cn(
                "flex h-12 w-12 items-center justify-center rounded-[6px] bg-[#0A090D]",
                className,
                )}
                style={{
                boxShadow:
                    "0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset",
                }}
            >
                <div
                className={cn(
                    "flex w-full flex-col items-center justify-center text-[8px] text-neutral-200",
                    childrenClassName,
                    backlit && "text-white",
                )}
                >
                {children}
                </div>
            </div>
        </div>
    );
}
    `;

    return (
        <div className="bg-white h-[120vh]"
            style={{
                boxShadow: "rgba(34, 42, 53, 0.06) 0px 0px 24px, rgba(0, 0, 0, 0.05) 0px 1px 1px, rgba(34, 42, 53, 0.04) 0px 0px 0px 1px, rgba(34, 42, 53, 0.08) 0px 0px 4px, rgba(47, 48, 55, 0.05) 0px 16px 68px, rgba(255, 255, 255, 0.1) 0px 1px 0px inset"
            }}
        >
            <div className="mx-auto flex h-full max-w-[88rem] flex-col items-start sm:py-0 px-24">
                <div className="mx-4 my-20">
                    <h1 className="text-neutral-900 text-3xl font-medium tracking-tight sm:text-left">
                        As simple as copy and paste
                    </h1>
                    <p className="mt-4 max-w-lg text-base text-black md:text-lg">
                        Copy paste the most trending components and use them in your websites without having to worry about styling and animations.    
                    </p>
                </div>
                <div className="flex w-full mt-20">
                    <div className="relative">
                        <Keyboard />
                    </div>
                    <div className="absolute right-10 top-255">
                        <CodeBlock
                            language="tsx"
                            filename="DummyComponent.tsx"
                            highlightLines={[9, 13, 14, 18]}
                            code={code}
                        />
                    </div>
                </div>
                
            </div>
        </div>
    )
}