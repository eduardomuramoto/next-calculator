'use client'
import { useState } from "react";
import Display from "./components/display";
import Keyboard from "./components/keyboard/keyboard";
import { create, all } from 'mathjs'

const config = { }
const math = create(all, config)

interface Calculator {
  onClick: React.MouseEvent<HTMLElement>;
}

export default function Home({onClick} : Calculator) {
  const [calc, setCalc] = useState("");
  const [memo, setMemo] = useState("");
  const [wasOddEven, setWasOddEven] = useState(false);
  const [isResult, setIsResult] = useState(false);
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  function handleCalc(e) {
    let lastChar = calc.charAt(calc.length-1);
    let targetName = e.currentTarget.name;
    let last = isResult? "":calc.slice(-1);
    switch (targetName) {
      case "CE":
        if(last !== ")" && !isResult){
          setCalc(calc.slice(0, -1));
          setWasOddEven(false);
          setIsResult(false);
        } if(isResult) {
          setMemo(calc);
          setCalc("");
          setWasOddEven(false);
          setIsResult(false);
        }
        break;
      case "C":
        setCalc("");
        setWasOddEven(false);
        setIsResult(false);
        break;
      case "+":
        if((last !== "" && !isNaN(last)) || last === "%" || isResult || lastChar === ")") {
          setCalc(calc+targetName);
          setWasOddEven(false);
          setIsResult(false);
        }
        break;
      case "-":
        if((last !== "" && !isNaN(last)) || last === "%" || isResult || lastChar === ")") {
          setCalc(calc+targetName);
          setWasOddEven(false);
          setIsResult(false);
        }
        break;
      case "*":
        if((last !== "" && !isNaN(last)) || last === "%" || isResult || lastChar === ")") {
          setCalc(calc+targetName);
          setWasOddEven(false);
          setIsResult(false);
        }
        break;
      case "/":
        if((last !== "" && !isNaN(last)) || last === "%" || isResult || lastChar === ")") {
          setCalc(calc+targetName);
          setWasOddEven(false);
          setIsResult(false);
        }
        break;
      case "%":
        if(last !== "" && !isNaN(last) || isResult) {
          setCalc(calc+targetName);
          setWasOddEven(false);
          setIsResult(false);
        }
        break;
      case "evenodd":
        if(wasOddEven || last !== "" && !isNaN(last) || isResult) {
          const lastNumber = lastChar === ")" ? calc.split(specialChars).slice(-2)[0] : calc.split(specialChars).slice(-1);
          if(wasOddEven) {
            if(lastChar === ")") {
              console.log(calc);
              setCalc(calc.slice(0,-(lastNumber.length+3))+lastNumber);
            } else {
              setCalc(calc.slice(0,-(lastNumber.length+1))+"-("+lastNumber+")");
            }
          } if( isResult ) {
            setCalc("-("+lastNumber+")");
          } else {
            setCalc(calc.slice(0,-(lastNumber.length+1))+"-("+lastNumber+")");
          }
          setWasOddEven(true);
          setIsResult(false);
        }
        break;
      case "equals":
        if(last !== "" && !isNaN(last) || lastChar === ")") {
        setMemo(calc);
        setCalc(math.evaluate(calc).toString());
        setWasOddEven(false);
        setIsResult(true);
        }
        break;
      default:
        console.log(last !== ")" && !isResult);
        if(last !== ")" && !isResult  ){
          setCalc(calc+targetName);
          setIsResult(false);
          setWasOddEven(false);
        }
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
