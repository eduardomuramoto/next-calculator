import { Props, Props } from "next/script";
import Button from "./button";
import dividedSymbol from "@/../public/divided.svg"
import minusSymbol from "@/../public/minus.svg"
import plusSymbol from "@/../public/plus.svg"
import timesSymbol from "@/../public/times.svg"
import evenoddSymbol from "@/../public/evenodd.svg"
import equalsSymbol from "@/../public/equals.svg"
import Image from "next/image";
import { ReactNode } from "react";

interface Props {
  handleClick?: () => any;
}


export default function Keyboard({handleClick} : Props) {
  return (
    <div id="keyboard" className="mx-9 mt-3 pb-9 flex flex-wrap justify-between self-end">
    <Button buttonClick={handleClick} type="clear" name="CE">CE</Button>
    <Button buttonClick={handleClick} name="C" >C</Button>
    <Button buttonClick={handleClick} name="%">%</Button>
    <Button buttonClick={handleClick} name="/" type="operator"><Image src={dividedSymbol} alt="divided symbol"/></Button>
    <Button buttonClick={handleClick} name="7">7</Button>
    <Button buttonClick={handleClick} name="8">8</Button>
    <Button buttonClick={handleClick} name="9">9</Button>
    <Button buttonClick={handleClick} name="*" type="operator"><Image src={timesSymbol} alt="times symbol"/></Button>
    <Button buttonClick={handleClick} name="4">4</Button>
    <Button buttonClick={handleClick} name="5">5</Button>
    <Button buttonClick={handleClick} name="6">6</Button>
    <Button buttonClick={handleClick} name="-" type="operator"><Image src={minusSymbol} alt="minus symbol"/></Button>
    <Button buttonClick={handleClick} name="1">1</Button>
    <Button buttonClick={handleClick} name="2">2</Button>
    <Button buttonClick={handleClick} name="3">3</Button>
    <Button buttonClick={handleClick} name="+" type="operator"><Image src={plusSymbol} alt="plus symbol"/></Button>
    <Button buttonClick={handleClick} name="evenodd"><Image src={evenoddSymbol} alt="evenodd symbol"/></Button>
    <Button buttonClick={handleClick} name="0">0</Button>
    <Button buttonClick={handleClick} name=".">,</Button>
    <Button buttonClick={handleClick} name="equals" type="equals"><Image src={equalsSymbol} alt="equals symbol"/></Button>
  </div>
  );
}
