'use client'
import { useState } from "react";
import Display from "./components/display";
import Keyboard from "./components/keyboard/keyboard";

interface Calculator {
  onClick: React.MouseEvent<HTMLElement>;
}

export default function Home({onClick} : Calculator) {
  const [calc, setCalc] = useState("");
  const [memo, setMemo] = useState("");
  function handleCalc(e) {
    let targetName = e.currentTarget.name;
    let last = calc.slice(-1);
    switch (targetName) {
      case "CE":
        setCalc(calc.slice(0, -1));
        break;
      case "C":
        setCalc("");
        break;
      case "+":
        if((last !== "" && !isNaN(last)) || last === "%") {
          setCalc(calc+targetName);
        }
        break;
      case "-":
        if((last !== "" && !isNaN(last)) || last === "%") {
          setCalc(calc+targetName);
        }
        break;
      case "*":
        if((last !== "" && !isNaN(last)) || last === "%") {
          setCalc(calc+targetName);
        }
        break;
      case "/":
        if((last !== "" && !isNaN(last)) || last === "%") {
          setCalc(calc+targetName);
        }
        break;
      case "%":
        if(last !== "" && !isNaN(last)) {
          setCalc(calc+targetName);
        }
        break;
      case "equals":
        setMemo(calc);
        setCalc("RESULT");
        break;
      default:
        setCalc(calc+targetName);
        break;
    }
 }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="w-full flex-center">
          Calculator
        </h1>

      </div>
      <div id="calculator" className="w-[356px] h-[566px] bg-zinc-800 rounded-3xl shadow-3d">
        <Display currentDisplay={calc} memoDisplay={memo}/>
        <Keyboard handleClick={handleCalc}/>
      </div>
    </main>
  );
}
