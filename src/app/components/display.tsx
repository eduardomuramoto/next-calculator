import Image from "next/image";
import equalsDisplay from "@/../public/equalsDisplay.svg"

interface DisplayProps {
  currentDisplay: string;
  memoDisplay: string;
}

export default function Display({currentDisplay, memoDisplay}:DisplayProps) {
  let hasEqual = memoDisplay? "opacity-100":"opacity-0";
  return (
        <div id="display" className="h-[90px] mt-14 px-8">
          <div id="last-calc" className="text-right text-slate-400 text-xl leading-[140%]">{memoDisplay}</div>
          <div id="result" className="flex justify-between mt-2">
          <Image
              priority
              src={equalsDisplay}
              alt="Equals Symbol"
              className={hasEqual}
            />
            <span id="current" className="text-4xl text-slate-100 leading-[140%]">{currentDisplay}</span>
          </div>
        </div>
  );
}
