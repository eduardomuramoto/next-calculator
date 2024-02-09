import { Props } from "next/script";
import Button from "./button";
import dividedSymbol from "@/../public/divided.svg"
import minusSymbol from "@/../public/minus.svg"
import plusSymbol from "@/../public/plus.svg"
import timesSymbol from "@/../public/times.svg"
import evenoddSymbol from "@/../public/evenodd.svg"
import equalsSymbol from "@/../public/equals.svg"
import Image from "next/image";


export default function Keyboard({children} : Props) {
  return (
    <div id="keyboard" className="mx-9 mt-3 pb-9 flex flex-wrap justify-between">
    <Button type="clear">CE</Button>
    <Button>C</Button>
    <Button>%</Button>
    <Button type="operator"><Image src={dividedSymbol} alt="divided symbol"/></Button>
    <Button>7</Button>
    <Button>8</Button>
    <Button>9</Button>
    <Button type="operator"><Image src={timesSymbol} alt="times symbol"/></Button>
    <Button>4</Button>
    <Button>5</Button>
    <Button>6</Button>
    <Button type="operator"><Image src={minusSymbol} alt="minus symbol"/></Button>
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
    <Button type="operator"><Image src={plusSymbol} alt="plus symbol"/></Button>
    <Button><Image src={evenoddSymbol} alt="evenodd symbol"/></Button>
    <Button>0</Button>
    <Button>,</Button>
    <Button type="equals"><Image src={equalsSymbol} alt="equals symbol"/></Button>
  </div>
  );
}
