export default function Container({ children}: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-100">
            {children}
        </div>
    )
}