import { CheckBox } from "@/components/CustomComponents/dynamic-checkbox";
import DynamicScroll from "@/components/CustomComponents/DynamicScroll";
import { Keyboard } from "@/components/CustomComponents/Keyboard";

const Todos = [
    {
        id: 1,
        title: "Learn React",
        checked: false
    },
    {
        id: 2,
        title: "Learn Motion",
        checked: true
    },
    {
        id: 3,
        title: "Build a project",
        checked: false
    }
]

export const COMPONENTS = [
    {
        id: "dynamic-checkbox",
        name: "Dynamic Checkbox",
        tags: ["checkbox", "form", "input", "accessibility"],
        Category: "Form",
        shortDescription: "A highly customizable and accessible checkbox component designed for modern web applications. It supports dynamic state changes, including indeterminate states, and provides a smooth user experience with motion-enhanced transitions.",
        description: "An accessible, motion-enhanced checkbox built for modern UI libraries. It animates state changes (unchecked → indeterminate → checked) using subtle scale, opacity and stroke-dash transitions for instant affordance without distraction. The check glyph (or custom icon) is drawn with a springy path reveal while the container background and border smoothly morph to their active tokens.",
        Code: <CheckBox Todos={Todos}/>
    },

    {
        id: "keyboard",
        name: "Keyboard",
        tags: ["Landing Page", "Hero Section", "Animation"],
        Category: "Landing Page",
        shortDescription: "A visually striking keyboard animation that showcases the power of motion design in web development. This component features a dynamic keyboard animation that responds to user interactions, creating an engaging and interactive experience.",
        description: "A visually striking keyboard animation that showcases the power of motion design in web development. This component features a dynamic keyboard animation that responds to user interactions, creating an engaging and interactive experience. The animation is designed to be smooth and responsive, providing instant feedback to user actions while maintaining a polished and professional appearance.",
        Code: <div className="flex justify-center items-center h-full"><Keyboard /></div>
    },
    {
        id: "dynamic-scroll",
        name: "Dynamic Scroll",
        tags: ["scroll", "animation", "motion"],
        Category: "Animation",
        shortDescription: "A dynamic scroll animation that enhances the user experience by providing smooth and visually appealing transitions as users scroll through content. This component is designed to be lightweight and performant, ensuring a seamless experience across devices.",
        description: "A dynamic scroll animation that enhances the user experience by providing smooth and visually appealing transitions as users scroll through content. This component is designed to be lightweight and performant, ensuring a seamless experience across devices. It utilizes modern web technologies to create fluid animations that respond to user interactions, making it ideal for creating engaging and interactive web applications.",
        Code: <div className="flex justify-center items-center h-full"><DynamicScroll/></div>
    }
];