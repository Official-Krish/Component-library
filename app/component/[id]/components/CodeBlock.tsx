"use client";
import { useEffect, useState } from "react";
import { CodeBlock } from "@/components/ui/code-block";

export default function Code({ search }: { search: string }) {
    const [code, setCode] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        let isMounted = true;

        async function fetchCode() {
            try {
                setLoading(true);
                const res = await fetch(`/api/code/${encodeURIComponent(search)}`);
                if (!res.ok) {
                    throw new Error("Failed to load code");
                }
                const data = await res.json();
                if (isMounted) setCode(data.code || "");
            } catch (err: unknown) {
                if (isMounted) setError("Unable to load code for this component.");
            } finally {
                if (isMounted) setLoading(false);
            }
        }

        fetchCode();
        return () => {
            isMounted = false;
        };
    }, [search]);

    if (loading) {
        return <div className="text-sm text-zinc-500">Loading code…</div>;
    }

    if (error) {
        return <div className="text-sm text-red-500">{error}</div>;
    }

    return (
        <div>
            <CodeBlock
                language="tsx"
                filename={`${search}.tsx`}
                highlightLines={[9, 13, 14, 18]}
                code={code}
                className="w-full h-[400px]"
            />
        </div>
    );
}