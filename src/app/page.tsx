import Button from "./components/button";
import Display from "./components/display";
import Keyboard from "./components/keyboard/keyboard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="w-full flex-center">
          Calculator
        </h1>

      </div>
      <div id="calculator" className="w-[356px] h-[566px] bg-zinc-800 rounded-3xl shadow-3d">
        <Display/>
        <Keyboard/>
      </div>
    </main>
  );
}
