import DynamicScroll from "./CustomComponents/DynamicScroll";
import Components from "./LandingPage/Components";
import Hero from "./LandingPage/Hero";
import Showcase from "./LandingPage/Showcase";

export default function LandingPage() {
    return (
        <div className="w-full h-full relative">
            <Hero />
            <Showcase />
            <Components />
            <div className="fixed bottom-0 left-0 w-full h-20 flex items-center justify-center z-50">
                <DynamicScroll/>
            </div>
        </div>
    )
}