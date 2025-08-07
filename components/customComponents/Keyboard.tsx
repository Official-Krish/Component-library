import { cn } from "@/lib/utils";
import {
    IconBrightnessDown,
    IconBrightnessUp,
    IconCaretRightFilled,
    IconCaretUpFilled,
    IconChevronUp,
    IconMicrophone,
    IconMoon,
    IconPlayerSkipForward,
    IconPlayerTrackNext,
    IconPlayerTrackPrev,
    IconTable,
    IconVolume,
    IconVolume2,
    IconVolume3,
} from "@tabler/icons-react";
import { IconSearch } from "@tabler/icons-react";
import { IconWorld } from "@tabler/icons-react";
import { IconCommand } from "@tabler/icons-react";
import { IconCaretLeftFilled } from "@tabler/icons-react";
import { IconCaretDownFilled } from "@tabler/icons-react";

export const Keyboard = () => {
    return (
      <div className="mx-1 h-fit w-fit [transform:translateZ(0)] rounded-[10px] p-2 [will-change:transform] bg-zinc-800 ">
        {/* First Row */}
        <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
          <KBtn
            className="w-10 items-end justify-start pb-[2px] pl-[4px]"
            childrenClassName="items-start"
          >
            esc
          </KBtn>
          <KBtn>
            <IconBrightnessDown className="h-[6px] w-[6px]" />
            <span className="mt-1 inline-block">F1</span>
          </KBtn>
          <KBtn>
            <IconBrightnessUp className="h-[6px] w-[6px]" />
            <span className="mt-1 inline-block">F2</span>
          </KBtn>
          <KBtn>
            <IconTable className="h-[6px] w-[6px]" />
            <span className="mt-1 inline-block">F3</span>
          </KBtn>
          <KBtn>
            <IconSearch className="h-[6px] w-[6px]" />
            <span className="mt-1 inline-block">F4</span>
          </KBtn>
          <KBtn>
            <IconMicrophone className="h-[6px] w-[6px]" />
            <span className="mt-1 inline-block">F5</span>
          </KBtn>
          <KBtn>
            <IconMoon className="h-[6px] w-[6px]" />
            <span className="mt-1 inline-block">F6</span>
          </KBtn>
          <KBtn>
            <IconPlayerTrackPrev className="h-[6px] w-[6px]" />
            <span className="mt-1 inline-block">F7</span>
          </KBtn>
          <KBtn>
            <IconPlayerSkipForward className="h-[6px] w-[6px]" />
            <span className="mt-1 inline-block">F8</span>
          </KBtn>
          <KBtn>
            <IconPlayerTrackNext className="h-[6px] w-[6px]" />
            <span className="mt-1 inline-block">F8</span>
          </KBtn>
          <KBtn>
            <IconVolume3 className="h-[6px] w-[6px]" />
            <span className="mt-1 inline-block">F10</span>
          </KBtn>
          <KBtn>
            <IconVolume2 className="h-[6px] w-[6px]" />
            <span className="mt-1 inline-block">F11</span>
          </KBtn>
          <KBtn>
            <IconVolume className="h-[6px] w-[6px]" />
            <span className="mt-1 inline-block">F12</span>
          </KBtn>
          <KBtn>
            <div className="h-4 w-4 rounded-full bg-gradient-to-b from-neutral-900 from-20% via-black via-50% to-neutral-900 to-95% p-px">
              <div className="h-full w-full rounded-full bg-black" />
            </div>
          </KBtn>
        </div>
  
        {/* Second row */}
        <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
          <KBtn>
            <span className="block">~</span>
            <span className="mt-1 block">`</span>
          </KBtn>
          <KBtn>
            <span className="block">!</span>
            <span className="block">1</span>
          </KBtn>
          <KBtn>
            <span className="block">@</span>
            <span className="block">2</span>
          </KBtn>
          <KBtn>
            <span className="block">#</span>
            <span className="block">3</span>
          </KBtn>
          <KBtn>
            <span className="block">$</span>
            <span className="block">4</span>
          </KBtn>
          <KBtn>
            <span className="block">%</span>
            <span className="block">5</span>
          </KBtn>
          <KBtn>
            <span className="block">^</span>
            <span className="block">6</span>
          </KBtn>
          <KBtn>
            <span className="block">&</span>
            <span className="block">7</span>
          </KBtn>
          <KBtn>
            <span className="block">*</span>
            <span className="block">8</span>
          </KBtn>
          <KBtn>
            <span className="block">(</span>
            <span className="block">9</span>
          </KBtn>
          <KBtn>
            <span className="block">)</span>
            <span className="block">0</span>
          </KBtn>
          <KBtn>
            <span className="block">&mdash;</span>
            <span className="block">_</span>
          </KBtn>
          <KBtn>
            <span className="block">+</span>
            <span className="block"> = </span>
          </KBtn>
          <KBtn
            className="w-10 items-end justify-end pr-[4px] pb-[2px]"
            childrenClassName="items-end"
          >
            delete
          </KBtn>
        </div>
  
        {/* Third row */}
        <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
          <KBtn
            className="w-10 items-end justify-start pb-[2px] pl-[4px]"
            childrenClassName="items-start"
          >
            tab
          </KBtn>
          <KBtn>
            <span className="block">Q</span>
          </KBtn>
          <KBtn>
            <span className="block">W</span>
          </KBtn>
          <KBtn>
            <span className="block">E</span>
          </KBtn>
          <KBtn>
            <span className="block">R</span>
          </KBtn>
          <KBtn>
            <span className="block">T</span>
          </KBtn>
          <KBtn>
            <span className="block">Y</span>
          </KBtn>
          <KBtn>
            <span className="block">U</span>
          </KBtn>
          <KBtn>
            <span className="block">I</span>
          </KBtn>
          <KBtn>
            <span className="block">O</span>
          </KBtn>
          <KBtn>
            <span className="block">P</span>
          </KBtn>
          <KBtn>
            <span className="block">{`{`}</span>
            <span className="block">{`[`}</span>
          </KBtn>
          <KBtn>
            <span className="block">{`}`}</span>
            <span className="block">{`]`}</span>
          </KBtn>
          <KBtn>
            <span className="block">{`|`}</span>
            <span className="block">{`\\`}</span>
          </KBtn>
        </div>
  
        {/* Fourth Row */}
        <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
          <KBtn
            className="w-[3.8rem] items-end justify-start pb-[2px] pl-[4px]"
            childrenClassName="items-start"
          >
            caps lock
          </KBtn>
          <KBtn>
            <span className="block">A</span>
          </KBtn>
          <KBtn>
            <span className="block">S</span>
          </KBtn>
          <KBtn>
            <span className="block">D</span>
          </KBtn>
          <KBtn>
            <span className="block">F</span>
          </KBtn>
          <KBtn>
            <span className="block">G</span>
          </KBtn>
          <KBtn>
            <span className="block">H</span>
          </KBtn>
          <KBtn>
            <span className="block">J</span>
          </KBtn>
          <KBtn>
            <span className="block">K</span>
          </KBtn>
          <KBtn>
            <span className="block">L</span>
          </KBtn>
          <KBtn>
            <span className="block">{`:`}</span>
            <span className="block">{`;`}</span>
          </KBtn>
          <KBtn>
            <span className="block">{`"`}</span>
            <span className="block">{`'`}</span>
          </KBtn>
          <KBtn
            className="w-[4.85rem] items-end justify-end pr-[4px] pb-[2px]"
            childrenClassName="items-end"
          >
            return
          </KBtn>
        </div>
  
        {/* Fifth Row */}
        <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
          <KBtn
            className="w-[5.8rem] items-end justify-start pb-[2px] pl-[4px]"
            childrenClassName="items-start"
          >
            shift
          </KBtn>
          <KBtn>
            <span className="block">Z</span>
          </KBtn>
          <KBtn>
            <span className="block">X</span>
          </KBtn>
          <KBtn>
            <span className="block">C</span>
          </KBtn>
          <KBtn>
            <span className="block">V</span>
          </KBtn>
          <KBtn>
            <span className="block">B</span>
          </KBtn>
          <KBtn>
            <span className="block">N</span>
          </KBtn>
          <KBtn>
            <span className="block">M</span>
          </KBtn>
          <KBtn>
            <span className="block">{`<`}</span>
            <span className="block">{`,`}</span>
          </KBtn>
          <KBtn>
            <span className="block">{`>`}</span>
            <span className="block">{`.`}</span>
          </KBtn>
          <KBtn>
            <span className="block">{`?`}</span>
            <span className="block">{`/`}</span>
          </KBtn>
          <KBtn
            className="w-[5.95rem] items-end justify-end pr-[4px] pb-[2px]"
            childrenClassName="items-end"
          >
            shift
          </KBtn>
        </div>
  
        {/* sixth Row */}
        <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
          <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
            <div className="flex w-full justify-end pr-1">
              <span className="block">fn</span>
            </div>
            <div className="flex w-full justify-start pl-1">
              <IconWorld className="h-[6px] w-[6px]" />
            </div>
          </KBtn>
          <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
            <div className="flex w-full justify-end pr-1">
              <IconChevronUp className="h-[6px] w-[6px]" />
            </div>
            <div className="flex w-full justify-start pl-1">
              <span className="block">control</span>
            </div>
          </KBtn>
          <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
            <div className="flex w-full justify-end pr-1">
              <OptionKey className="h-[6px] w-[6px]" />
            </div>
            <div className="flex w-full justify-start pl-1">
              <span className="block">option</span>
            </div>
          </KBtn>
          <KBtn
            className="w-15"
            childrenClassName="h-full justify-between py-[4px]"
          >
            <div className="flex w-full justify-end pr-1">
              <IconCommand className="h-[6px] w-[6px]" />
            </div>
            <div className="flex w-full justify-start pl-1">
              <span className="block">command</span>
            </div>
          </KBtn>
          <KBtn className="w-[16.2rem]"></KBtn>
          <KBtn
            className="w-15"
            childrenClassName="h-full justify-between py-[4px]"
          >
            <div className="flex w-full justify-start pl-1">
              <IconCommand className="h-[6px] w-[6px]" />
            </div>
            <div className="flex w-full justify-start pl-1">
              <span className="block">command</span>
            </div>
          </KBtn>
          <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
            <div className="flex w-full justify-start pl-1">
              <OptionKey className="h-[6px] w-[6px]" />
            </div>
            <div className="flex w-full justify-start pl-1">
              <span className="block">option</span>
            </div>
          </KBtn>
          <div className="mt-5 flex h-6 w-[4.9rem] flex-col items-center justify-end rounded-[4px] p-[0.5px] ml-4">
            <KBtn className="h-4 w-8">
              <IconCaretUpFilled className="h-[7px] w-[7px]" />
            </KBtn>
            <div className="flex">
              <KBtn className="h-4 w-8">
                <IconCaretLeftFilled className="h-[7px] w-[7px]" />
              </KBtn>
              <KBtn className="h-4 w-8">
                <IconCaretDownFilled className="h-[7px] w-[7px]" />
              </KBtn>
              <KBtn className="h-4 w-8">
                <IconCaretRightFilled className="h-[7px] w-[7px]" />
              </KBtn>
            </div>
          </div>
        </div>
      </div>
    );
};
  
const KBtn = ({
    className,
    children,
    childrenClassName,
    backlit = true,
}: {
    className?: string;
    children?: React.ReactNode;
    childrenClassName?: string;
    backlit?: boolean;
}) => {
    return (
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
  };
  
const OptionKey = ({ className }: { className: string }) => {
    return (
      <svg
        fill="none"
        version="1.1"
        id="icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className={className}
      >
        <rect
          stroke="currentColor"
          strokeWidth={2}
          x="18"
          y="5"
          width="10"
          height="2"
        />
        <polygon
          stroke="currentColor"
          strokeWidth={2}
          points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "
        />
        <rect
          id="_Transparent_Rectangle_"
          className="st0"
          width="32"
          height="32"
          stroke="none"
        />
      </svg>
    );
};