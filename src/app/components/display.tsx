import Image from "next/image";
import equalsDisplay from "@/../public/equalsDisplay.svg"

export default function Display() {
  return (
        <div id="display" className="mt-14 px-8">
          <div id="last-calc" className="text-right text-slate-400 text-xl leading-[140%]">1 + 1</div>
          <div id="result" className="flex justify-between mt-2">
          <Image
              priority
              src={equalsDisplay}
              alt="Equals Symbol"
            />
            <span className="text-4xl text-slate-100 leading-[140%]">2</span>
          </div>
        </div>
  );
}
