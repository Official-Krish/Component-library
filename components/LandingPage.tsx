import Components from "./LandingPage/Components";
import Hero from "./LandingPage/Hero";
import Showcasae from "./LandingPage/Showcase";

export default function LandingPage() {
    return (
        <div className="w-full h-full">
            <Hero />
            <Showcasae />
            <Components />
        </div>
    )
}